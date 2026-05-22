import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Lightweight markdown → HTML converter (no external dependency).
 * Handles the subset Claude typically produces: bold, italic, headings,
 * bullet lists, inline code, code blocks, and line breaks.
 */
@Pipe({
  name: 'markdown',
  standalone: true,
})
export class MarkdownPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

  transform(value: string | null | undefined): SafeHtml {
    if (!value) return '';
    return this.sanitizer.bypassSecurityTrustHtml(this.toHtml(value));
  }

  private toHtml(md: string): string {
    let html = md
      // Escape HTML entities first to prevent injection
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // ── Block-level elements ─────────────────────────────────────────────────

    // Fenced code blocks  ```lang\n...\n```
    html = html.replace(/```[\w]*\n?([\s\S]*?)```/g, (_, code) =>
      `<pre><code>${code.trim()}</code></pre>`
    );

    // Headings  # H1  ## H2  ### H3
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.+)$/gm,  '<h2>$1</h2>');
    html = html.replace(/^# (.+)$/gm,   '<h1>$1</h1>');

    // Bullet lists: collect consecutive `- ` or `* ` lines into a <ul>
    html = html.replace(/((?:^[-*] .+\n?)+)/gm, (block) => {
      const items = block
        .trim()
        .split('\n')
        .filter(Boolean)
        .map(line => `<li>${line.replace(/^[-*] /, '').trim()}</li>`)
        .join('');
      return `<ul>${items}</ul>`;
    });

    // ── Inline elements ──────────────────────────────────────────────────────

    // Bold  **text** or __text__
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.+?)__/g,     '<strong>$1</strong>');

    // Italic  *text* or _text_  (after bold so ** is handled first)
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.+?)_/g,   '<em>$1</em>');

    // Inline code  `code`
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // ── Paragraphs / line breaks ─────────────────────────────────────────────

    // Split on blank lines to form paragraphs; single newlines become <br>
    const blocks = html.split(/\n{2,}/);
    html = blocks
      .map(block => {
        const trimmed = block.trim();
        if (!trimmed) return '';
        // Don't wrap block-level elements in <p>
        if (/^<(h[1-3]|ul|ol|pre|li)/.test(trimmed)) return trimmed;
        return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
      })
      .filter(Boolean)
      .join('\n');

    return html;
  }
}
