import { Injectable } from '@angular/core';

const POST_LOGIN_REDIRECT_KEY = 'postLoginRedirectUrl';

@Injectable({
  providedIn: 'root',
})
export class PostLoginRedirectService {
  set(url: string): void {
    sessionStorage.setItem(POST_LOGIN_REDIRECT_KEY, url);
  }

  consume(): string | null {
    const url = sessionStorage.getItem(POST_LOGIN_REDIRECT_KEY);
    sessionStorage.removeItem(POST_LOGIN_REDIRECT_KEY);
    return url;
  }
}
