import { Injectable } from '@angular/core';

export interface Video{
  title: string;
  description: string | null;
  videoId: string;
  videoUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  getVideos(filter: string = ''): Video[] {
    if (!filter.trim()) {
      return this.videos;
    }
    const lowerCaseFilter = filter.toLowerCase();
    return this.videos.filter((video) =>
      video.title.toLowerCase().includes(lowerCaseFilter)
    );
  }

private videos = [
  {
    "title": "Stop Using Azure AD B2C! Use Entra External ID for Angular & .NET Now",
    "description": null,
    "videoId": "QMP-ukzknb4",
    "videoUrl": "https://www.youtube.com/watch?v=QMP-ukzknb4"
  },
  {
    "title": "Entra External ID & Angular: Build Your First Secure Login (Hands-On Guide)",
    "description": null,
    "videoId": "DZdF2Cp9OHs",
    "videoUrl": "https://www.youtube.com/watch?v=DZdF2Cp9OHs"
  },
  {
    "title": "Angular + NgRx Tutorial: Build a Dynamic Job Role Recommender App",
    "description": null,
    "videoId": "dLbij5m_UbY",
    "videoUrl": "https://www.youtube.com/watch?v=dLbij5m_UbY"
  },
  {
    "title": "Azure AD B2C is GONE? The NEW Microsoft Entra External ID (Devs NEED to See This!)",
    "description": null,
    "videoId": "s8eF6BIUuGc",
    "videoUrl": "https://www.youtube.com/watch?v=s8eF6BIUuGc"
  },
  {
    "title": "Cracking the Azure Developer Interview: All You Need to Know for Core Azure Services & Security",
    "description": null,
    "videoId": "-T37gFC65sY",
    "videoUrl": "https://www.youtube.com/watch?v=-T37gFC65sY"
  },
  {
    "title": "Cracking the Azure Key Vault Interview: Key Concepts & Practice Questions",
    "description": null,
    "videoId": "o6sEK9a4S88",
    "videoUrl": "https://www.youtube.com/watch?v=o6sEK9a4S88"
  },
  {
    "title": "NgRx Made Simple: Master Angular State Management with a Fun Project for Beginners",
    "description": null,
    "videoId": "jhSKUSQX1gw",
    "videoUrl": "https://www.youtube.com/watch?v=jhSKUSQX1gw"
  },
  {
    "title": "Get Ready For Your Azure Storage Interview With These Tips!",
    "description": null,
    "videoId": "2bY6L7fg9YQ",
    "videoUrl": "https://www.youtube.com/watch?v=2bY6L7fg9YQ"
  },
  {
    "title": "Ace Your Azure App Service Interview: Top Questions & Concise Explanations",
    "description": null,
    "videoId": "pe_ReC7D4WI",
    "videoUrl": "https://www.youtube.com/watch?v=pe_ReC7D4WI"
  },
  {
    "title": "Get Ready to Ace Your Azure App Service Interview!",
    "description": null,
    "videoId": "YM5gGfblfzo",
    "videoUrl": "https://www.youtube.com/watch?v=YM5gGfblfzo"
  },
  {
    "title": "AI Will Replace 50% of Jobs in 5 Years - Are You Ready?",
    "description": null,
    "videoId": "lk9lCcPUK3k",
    "videoUrl": "https://www.youtube.com/watch?v=lk9lCcPUK3k"
  },
  {
    "title": "What is a Component in Angular? | Angular 19 Essentials #shorts",
    "description": null,
    "videoId": "GxiyjoaHZwo",
    "videoUrl": "https://www.youtube.com/watch?v=GxiyjoaHZwo"
  },
  {
    "title": "Conquer Your .NET Core Interview: The ONLY Guide You Need (Web API, Microservices & More!)",
    "description": null,
    "videoId": "GtSwwQ8RDNA",
    "videoUrl": "https://www.youtube.com/watch?v=GtSwwQ8RDNA"
  },
  {
    "title": "10 Azure Functions Questions You NEED To Know!",
    "description": null,
    "videoId": "-WgmegLaQ24",
    "videoUrl": "https://www.youtube.com/watch?v=-WgmegLaQ24"
  },
  {
    "title": "5 Middleware Interview Questions Every .NET Dev Should Know!",
    "description": null,
    "videoId": "sAtLTqvc2bM",
    "videoUrl": "https://www.youtube.com/watch?v=sAtLTqvc2bM"
  },
  {
    "title": "Ace Your .NET Core DI Interview: Top 5 Dependency Injection Questions",
    "description": null,
    "videoId": "Cd8DPNA3EaI",
    "videoUrl": "https://www.youtube.com/watch?v=Cd8DPNA3EaI"
  },
  {
    "title": ".NET Core Microservices Interview Questions: Your Key to Success",
    "description": null,
    "videoId": "LfGXAKfrO_Y",
    "videoUrl": "https://www.youtube.com/watch?v=LfGXAKfrO_Y"
  },
  {
    "title": ".NET Core Web API Interview Questions & Answers: Master the Essentials",
    "description": null,
    "videoId": "5YfbqvkWzdY",
    "videoUrl": "https://www.youtube.com/watch?v=5YfbqvkWzdY"
  },
  {
    "title": "Mastering EF Core in .NET: Model First, Database First, Real-World Queries & CRUD",
    "description": null,
    "videoId": "d0of5A3fqDA",
    "videoUrl": "https://www.youtube.com/watch?v=d0of5A3fqDA"
  },
  {
    "title": "Stop Guessing: The .NET EF Core Interview Questions You MUST Know",
    "description": null,
    "videoId": "o-nRtBGIQFo",
    "videoUrl": "https://www.youtube.com/watch?v=o-nRtBGIQFo"
  },
  {
    "title": "Angular Services Interview Questions & Answers: Ace Your Next Interview",
    "description": null,
    "videoId": "fD8lTzaJdnU",
    "videoUrl": "https://www.youtube.com/watch?v=fD8lTzaJdnU"
  },
  {
    "title": "How To Get A Free Second Chance On Microsoft Exams!",
    "description": null,
    "videoId": "8Lha7WO5hMk",
    "videoUrl": "https://www.youtube.com/watch?v=8Lha7WO5hMk"
  },
  {
    "title": ".NET Core EF Core: Real-World LINQ, Lambda & CRUD (E-commerce Example)",
    "description": null,
    "videoId": "GIqW3kfBTEs",
    "videoUrl": "https://www.youtube.com/watch?v=GIqW3kfBTEs"
  },
  {
    "title": "EF Core Database First: Relationships Explained (One-to-One, Many-to-Many, Real Example)",
    "description": null,
    "videoId": "myEOGw-A6cI",
    "videoUrl": "https://www.youtube.com/watch?v=myEOGw-A6cI"
  },
  {
    "title": "Unlock EF Core Model First in .NET 9 Web API: Your Complete Guide (Tools, Migrations, DTOs)",
    "description": null,
    "videoId": "eXURoDVfLEQ",
    "videoUrl": "https://www.youtube.com/watch?v=eXURoDVfLEQ"
  },
  {
    "title": "Top VS Code Shortcuts Every Developer Should Know: Boost Productivity Fast!",
    "description": null,
    "videoId": "oMD6vucKa7s",
    "videoUrl": "https://www.youtube.com/watch?v=oMD6vucKa7s"
  },
  {
    "title": "Master Angular Debugging in VS Code | Real-World Tips, Tricks & Traps!",
    "description": null,
    "videoId": "NQZ0wruubZQ",
    "videoUrl": "https://www.youtube.com/watch?v=NQZ0wruubZQ"
  },
  {
    "title": "Master Full-Stack Development with Angular, .NET Core & Azure | Build Real-World App",
    "description": null,
    "videoId": "zlybQJVLYrQ",
    "videoUrl": "https://www.youtube.com/watch?v=zlybQJVLYrQ"
  },
    {
      title: "Secure Your Angular App with Role-Based Authentication | Azure AD B2C & Auth Guards",
      description: null,
      videoId: "DlJhZxSraPU",
      videoUrl: "https://www.youtube.com/watch?v=DlJhZxSraPU"
    },
    {
      title: "Securely Fetch Azure AD B2C Data with .NET Core & Microsoft Graph API",
      description: null,
      videoId: "z8Bc0BH7PCA",
      videoUrl: "https://www.youtube.com/watch?v=z8Bc0BH7PCA"
    },
    {
      title: "🔒 Protect Your Azure Storage! Generate SAS Token in .NET Core API",
      description: null,
      videoId: "JM9XBOlrXAE",
      videoUrl: "https://www.youtube.com/watch?v=JM9XBOlrXAE"
    },
    {
      title: "Effortless & Secure Image Upload to Azure | Angular & .NET Core API Guide",
      description: null,
      videoId: "H3jDkvxmBTM",
      videoUrl: "https://www.youtube.com/watch?v=H3jDkvxmBTM"
    },
    {
      title: "Master Azure Storage Accounts! Public vs Private Containers & Secure Access Explained",
      description: null,
      videoId: "Hvv2akrXi_M",
      videoUrl: "https://www.youtube.com/watch?v=Hvv2akrXi_M"
    },
    {
      title: "Automate Emails Like a Pro! Azure Function Timer & HTTP Trigger in .NET",
      description: null,
      videoId: "FWQ564IKWvs",
      videoUrl: "https://www.youtube.com/watch?v=FWQ564IKWvs"
    },
    {
      title: ".NET Core Background Service | Automate Database Tasks in Web API",
      description: null,
      videoId: "z4F1cSolknQ",
      videoUrl: "https://www.youtube.com/watch?v=z4F1cSolknQ"
    },
    {
      title: "Azure AD B2C API Connector: Enrich JWT Tokens with User Data via Azure Functions",
      description: null,
      videoId: "L-f4zaAtNFA",
      videoUrl: "https://www.youtube.com/watch?v=L-f4zaAtNFA"
    },
    {
      title: "CI/CD for Azure Functions: Deploy .NET Core 9 Function App via Azure DevOps",
      description: null,
      videoId: "jydPQ8KH1YA",
      videoUrl: "https://www.youtube.com/watch?v=jydPQ8KH1YA"
    },
    {
      title: "Azure Functions Guide: Create .NET Core 9 Isolated HTTP Trigger for Email Alerts",
      description: null,
      videoId: "goCmC-kTZUk",
      videoUrl: "https://www.youtube.com/watch?v=goCmC-kTZUk"
    },
    {
      title: "Set Up Azure App Insights Alerts for 500 Errors | Monitor & Detect API Failures",
      description: null,
      videoId: "S98u6sv4DM0",
      videoUrl: "https://www.youtube.com/watch?v=S98u6sv4DM0"
    },
    {
      title: "Handle 500 Errors Gracefully in Angular 🚀 | Global Exception Handling & Toastr Notifications",
      description: null,
      videoId: "lN1yQWXGJ7E",
      videoUrl: "https://www.youtube.com/watch?v=lN1yQWXGJ7E"
    },
    {
      title: "Mastering Azure Application Insights For PRO API Monitoring",
      description: null,
      videoId: "EI3lVJXb0w4",
      videoUrl: "https://www.youtube.com/watch?v=EI3lVJXb0w4"
    },
    {
      title: "Deploy Angular 19 to Azure App Service | CI/CD with Azure DevOps",
      description: null,
      videoId: "IuELMXSAslo",
      videoUrl: "https://www.youtube.com/watch?v=IuELMXSAslo"
    },
    {
      title: "Deploy Your .NET Core 9 Web API to Azure For FREE | CI/CD with Azure DevOps",
      description: null,
      videoId: "8tYvsO4emAc",
      videoUrl: "https://www.youtube.com/watch?v=8tYvsO4emAc"
    },
    {
      title: "Azure AD B2C Makes Securing Angular And .NET Apps Easy And FAST",
      description: null,
      videoId: "V-3WAJd67EM",
      videoUrl: "https://www.youtube.com/watch?v=V-3WAJd67EM"
    },
    {
      title: "Managed Identity vs Service Principal - What’s the Difference?",
      description: null,
      videoId: "UKdUVWJhEQ0",
      videoUrl: "https://www.youtube.com/watch?v=UKdUVWJhEQ0"
    },
    {
      title: "Azure Key Vault Security Guide | Managed Identity for Web API Secrets (Hands-On Demo!)",
      description: null,
      videoId: "H3PhTw0AnUA",
      videoUrl: "https://www.youtube.com/watch?v=H3PhTw0AnUA"
    },
    {
      title: "Azure Bicep Made Easy! From Installation to Deploying a Storage Account | Step-by-Step Guide",
      description: null,
      videoId: "ZY_uNOpjXmw",
      videoUrl: "https://www.youtube.com/watch?v=ZY_uNOpjXmw"
    },
    {
      title: "Angular Input() & Output() Explained | Parent-Child Communication with Filters",
      description: null,
      videoId: "ThkG1Pkf_1s",
      videoUrl: "https://www.youtube.com/watch?v=ThkG1Pkf_1s"
    },
    {
      title: "Mastering API Calls In Angular With A Reusable Service",
      description: null,
      videoId: "kqHFDvnjbcw",
      videoUrl: "https://www.youtube.com/watch?v=kqHFDvnjbcw"
    },
    {
      title: ".NET Core 9 Web API – Build Full CRUD with PATCH | Clean Architecture & Fluent Validation",
      description: null,
      videoId: "lAVUy2U9QgY",
      videoUrl: "https://www.youtube.com/watch?v=lAVUy2U9QgY"
    },
    {
      title: "Mastering Angular Signals in 2025 for EASY State Management",
      description: null,
      videoId: "Wm2yRolfK8I",
      videoUrl: "https://www.youtube.com/watch?v=Wm2yRolfK8I"
    },
    {
      title: "Build a Full Course App  using Angular 19 - Interactive Demo!",
      description: null,
      videoId: "M_lCcGwrYlo",
      videoUrl: "https://www.youtube.com/watch?v=M_lCcGwrYlo"
    },
    {
      title: "Supercharge Your Angular 19 App with Lazy Loading Techniques & Routing",
      description: null,
      videoId: "pu44fnIompg",
      videoUrl: "https://www.youtube.com/watch?v=pu44fnIompg"
    },
    {
      title: "Master Angular Data Binding and Directives | Complete Beginner's Guide",
      description: null,
      videoId: "gnGPcTCn81w",
      videoUrl: "https://www.youtube.com/watch?v=gnGPcTCn81w"
    },
    {
      title: "Mastering Angular 19 Standalone Components Quickly",
      description: null,
      videoId: "SwJ4RMQnJOo",
      videoUrl: "https://www.youtube.com/watch?v=SwJ4RMQnJOo"
    },
    {
      title: "Mastering Secure Azure SQL Database Connections Effortlessly",
      description: null,
      videoId: "jnF6VjUqlOo",
      videoUrl: "https://www.youtube.com/watch?v=jnF6VjUqlOo"
    },
    {
      title: "Learn Azure Policy Today to Stop Wasting Money",
      description: null,
      videoId: "ArvRAqrInSc",
      videoUrl: "https://www.youtube.com/watch?v=ArvRAqrInSc"
    },
    {
      title: "Git & Azure DevOps for absolute beginners!",
      description: null,
      videoId: "Lky9qQsohiA",
      videoUrl: "https://www.youtube.com/watch?v=Lky9qQsohiA"
    },
    {
      title: "Build .NET Core 9 Web API with Clean Architecture | Project Setup",
      description: null,
      videoId: "jx2xp37gehk",
      videoUrl: "https://www.youtube.com/watch?v=jx2xp37gehk"
    },
    {
      title: "Beginner's Guide to Database Design: Tables, Keys, and Constraints",
      description: null,
      videoId: "5ZXtGy5PRTQ",
      videoUrl: "https://www.youtube.com/watch?v=5ZXtGy5PRTQ"
    },
    {
      title: "SQL Basics for Beginners: Step-by-Step Guide with Examples",
      description: null,
      videoId: "FCy0ZsU47Ts",
      videoUrl: "https://www.youtube.com/watch?v=FCy0ZsU47Ts"
    },
    {
      title: "Discover The Best Swagger Alternatives For .NET Core 9 API",
      description: null,
      videoId: "RRtCpzgw3zQ",
      videoUrl: "https://www.youtube.com/watch?v=RRtCpzgw3zQ"
    },
    {
      title: "Install SQL Express, SSMS, Azure Data Studio & Connect to SQL Server | Step-by-Step Guide",
      description: null,
      videoId: "GPQl__P2JBk",
      videoUrl: "https://www.youtube.com/watch?v=GPQl__P2JBk"
    },
    {
      title: "How to Build an Online Course Certification Platform | Architecture & App Overview",
      description: null,
      videoId: "a7ojKsG9zCI",
      videoUrl: "https://www.youtube.com/watch?v=a7ojKsG9zCI"
    },
    {
      title: "Can AI Agents Really Take Over Human Jobs?",
      description: null,
      videoId: "wAtephJAkME",
      videoUrl: "https://www.youtube.com/watch?v=wAtephJAkME"
    },
    {
      title: "Full Stack Web Development 2025 | Angular 19, .NET Core Web API, Azure | Series Overview",
      description: null,
      videoId: "al2rkPWU0Xk",
      videoUrl: "https://www.youtube.com/watch?v=al2rkPWU0Xk"
    },
    {
      title: "How to Use GitHub Copilot in VS Code for Free | Step-by-Step Guide",
      description: null,
      videoId: "rc_qNxZhTbU",
      videoUrl: "https://www.youtube.com/watch?v=rc_qNxZhTbU"
    },
    {
      title: "Learn Smart Coding Live Stream",
      description: null,
      videoId: "77paa2SodPU",
      videoUrl: "https://www.youtube.com/watch?v=77paa2SodPU"
    },
    {
      title: "💻 Microsoft Certification Exams | Free Retake Offer! Take the Leap This December!",
      description: null,
      videoId: "MxYbAJfVeLY",
      videoUrl: "https://www.youtube.com/watch?v=MxYbAJfVeLY"
    },
    {
      title: "Set Up Swagger UI Authentication with Azure AD | Step-By-Step Guide",
      description: null,
      videoId: "0S0aspQAxrc",
      videoUrl: "https://www.youtube.com/watch?v=0S0aspQAxrc"
    },
    {
      title: "Angular 18 Resolver: Pre-Load Data Complete Guide",
      description: null,
      videoId: "i4IQHKV2Y7c",
      videoUrl: "https://www.youtube.com/watch?v=i4IQHKV2Y7c"
    },
    {
      title: "Mastering Angular 18's @Input and @Output for Seamless Data Sharing",
      description: null,
      videoId: "eEIXfMFm1eY",
      videoUrl: "https://www.youtube.com/watch?v=eEIXfMFm1eY"
    },
    {
      title: "Angular 18 Dynamic Form with Reactive Forms & CRUD Operations",
      description: null,
      videoId: "H8SCIb5Gq0E",
      videoUrl: "https://www.youtube.com/watch?v=H8SCIb5Gq0E"
    },
    {
      title: "Mastering GLOBAL Error Handling in Angular Made EASY",
      description: null,
      videoId: "PxltjRLrqTc",
      videoUrl: "https://www.youtube.com/watch?v=PxltjRLrqTc"
    },
    {
      title: "Secure Sign-In Made EASY With Azure AD B2C's BEST MFA Tips!",
      description: null,
      videoId: "YcnRPyZuuWo",
      videoUrl: "https://www.youtube.com/watch?v=YcnRPyZuuWo"
    },
    {
      title: "Clean Architecture Explained: A Step-by-Step Guide to a ToDo App",
      description: null,
      videoId: "lRKRaQNRSso",
      videoUrl: "https://www.youtube.com/watch?v=lRKRaQNRSso"
    },
    {
      title: "How to Set Up In-Memory Database in 5 Minutes!",
      description: null,
      videoId: "QBi7jQT4KoI",
      videoUrl: "https://www.youtube.com/watch?v=QBi7jQT4KoI"
    },
    {
      title: "Stop Breaking Your Code - Learn Unit Testing Now",
      description: null,
      videoId: "XP-7KK7RQFA",
      videoUrl: "https://www.youtube.com/watch?v=XP-7KK7RQFA"
    },
    {
      title: "Top EF Core Interview Q&A: Real-World Scenarios & Expert Answers!",
      description: null,
      videoId: "Lx3r-PKFiOM",
      videoUrl: "https://www.youtube.com/watch?v=Lx3r-PKFiOM"
    },
    {
      title: "Angular 18 Lazy Loading Guide: Traditional vs. Standalone Components",
      description: null,
      videoId: "GenX-gRiONE",
      videoUrl: "https://www.youtube.com/watch?v=GenX-gRiONE"
    },
    {
      title: "Angular ANIMATIONS That Will Make Your Website POP!",
      description: null,
      videoId: "urSLgn-eaAA",
      videoUrl: "https://www.youtube.com/watch?v=urSLgn-eaAA"
    },
    {
      title: "CanDeactivate GUARD Saves You from Unsaved Changes!",
      description: null,
      videoId: "HVQK0mFwetE",
      videoUrl: "https://www.youtube.com/watch?v=HVQK0mFwetE"
    },
    {
      title: "Master AZURE POLICY in 15 Minutes FLAT!",
      description: null,
      videoId: "FflEXMmneRY",
      videoUrl: "https://www.youtube.com/watch?v=FflEXMmneRY"
    },
    {
      title: "You Won't Believe How SIMPLE Azure RBAC Can Be!",
      description: null,
      videoId: "q8Lsv7m4nCQ",
      videoUrl: "https://www.youtube.com/watch?v=q8Lsv7m4nCQ"
    },
    {
      title: "Conquer the .NET Core and Web API Interview in 2024!",
      description: null,
      videoId: "_EoPX4Lutz8",
      videoUrl: "https://www.youtube.com/watch?v=_EoPX4Lutz8"
    },
    {
      title: "JWT SECRETS That Will Change Your Future",
      description: null,
      videoId: "3tv6S0Zb7KA",
      videoUrl: "https://www.youtube.com/watch?v=3tv6S0Zb7KA"
    },
    {
      title: "Unlock Lightning Fast Web API Deployment to Azure with GitHub Actions!",
      description: null,
      videoId: "tRknlvuFfjM",
      videoUrl: "https://www.youtube.com/watch?v=tRknlvuFfjM"
    },
    {
      title: "Net Core 8 with SignalR is the FASTEST Combo for Real-Time Chat Apps",
      description: null,
      videoId: "8KG2zKG4Z8Y",
      videoUrl: "https://www.youtube.com/watch?v=8KG2zKG4Z8Y"
    },
    {
      title: "BUILD Your First Azure App Service Web App in 2024!",
      description: null,
      videoId: "b_qIlOjnNmA",
      videoUrl: "https://www.youtube.com/watch?v=b_qIlOjnNmA"
    },
    {
      title: "Build Your First Full Stack Web App From Zero to Hero!",
      description: null,
      videoId: "Cxftp90K_ek",
      videoUrl: "https://www.youtube.com/watch?v=Cxftp90K_ek"
    },
    {
      title: "Angular 18 Auth Guards: The Ultimate Guide!",
      description: null,
      videoId: "zgKiWMIbp-c",
      videoUrl: "https://www.youtube.com/watch?v=zgKiWMIbp-c"
    },
    {
      title: "Angular 18 Reactive Forms CRUD - Ultimate Guide for Beginners",
      description: null,
      videoId: "wMX8Jn_GkA8",
      videoUrl: "https://www.youtube.com/watch?v=wMX8Jn_GkA8"
    },
    {
      title: "Master Angular Image Uploads to Azure Storage in Minutes!",
      description: null,
      videoId: "RlHLBD5FGXQ",
      videoUrl: "https://www.youtube.com/watch?v=RlHLBD5FGXQ"
    },
    {
      title: "The Secret to Building a dotnet core 8 Web API That Actually Works",
      description: null,
      videoId: "PM_WoN6E60M",
      videoUrl: "https://www.youtube.com/watch?v=PM_WoN6E60M"
    },
    {
      title: "The EXPERT Guide to NgRx Spinner and Toaster for Angular Mastery",
      description: null,
      videoId: "ArCJkoaOW7Q",
      videoUrl: "https://www.youtube.com/watch?v=ArCJkoaOW7Q"
    },
    {
      title: "Master Angular NOW Build Your First Web App Step-by-Step",
      description: null,
      videoId: "-cFUe43L-bs",
      videoUrl: "https://www.youtube.com/watch?v=-cFUe43L-bs"
    },
    {
      title: "Master Angular Directives in Record Time with Real World Examples",
      description: null,
      videoId: "3MlfG1OdPd8",
      videoUrl: "https://www.youtube.com/watch?v=3MlfG1OdPd8"
    },
    {
      title: "What If You Could MASTER Angular Data Binding in Minutes?",
      description: null,
      videoId: "k-tjCy2iRfo",
      videoUrl: "https://www.youtube.com/watch?v=k-tjCy2iRfo"
    },
    {
      title: "Supercharge Your .NET Core API with Azure Monitor",
      description: null,
      videoId: "W-KP9UlRBXc",
      videoUrl: "https://www.youtube.com/watch?v=W-KP9UlRBXc"
    },
    {
      title: "Azure Managed Identity Top 3 Security Hacks You Need Now",
      description: null,
      videoId: "YvR82BYwgKo",
      videoUrl: "https://www.youtube.com/watch?v=YvR82BYwgKo"
    },
    {
      title: "How to Implement Health Checks & Liveness Probes in .NET Core Web API | Step-by-Step Guide",
      description: null,
      videoId: "qIWJuQbuNkQ",
      videoUrl: "https://www.youtube.com/watch?v=qIWJuQbuNkQ"
    },
    {
      title: "Azure AD Roles & Security Groups | Setup & Integration for .NET Core 8 Web API & Angular 18",
      description: null,
      videoId: "VLbfh_kDwG4",
      videoUrl: "https://www.youtube.com/watch?v=VLbfh_kDwG4"
    },
    {
      title: "You Won't Believe How Easy Azure AD SSO Is in .NET Core",
      description: null,
      videoId: "SB1_zI11REI",
      videoUrl: "https://www.youtube.com/watch?v=SB1_zI11REI"
    },
    {
      title: "Complete CRUD with .NET Core 8 Web API & EF Core | Step-by-Step Guide | EP17",
      description: null,
      videoId: "wZQwT4gEysE",
      videoUrl: "https://www.youtube.com/watch?v=wZQwT4gEysE"
    },
    {
      title: "Azure SQL trigger for Functions | Automate Email on DB Changes | SendGrid Integration with Function",
      description: null,
      videoId: "PkQxuBT6U_M",
      videoUrl: "https://www.youtube.com/watch?v=PkQxuBT6U_M"
    },
    {
      title: "You Won't Believe How Easy Azure Functions Deployment Can Be",
      description: null,
      videoId: "40reRCU_N68",
      videoUrl: "https://www.youtube.com/watch?v=40reRCU_N68"
    },
    {
      title: "The SHOCKING Truth About Enriching Azure AD B2C Tokens with Custom Claims",
      description: null,
      videoId: "QUCvU_1WaJo",
      videoUrl: "https://www.youtube.com/watch?v=QUCvU_1WaJo"
    },
    {
      title: "Azure AD B2C Integration with Angular 18 & .NET Core 8 API | Step-by-Step Guide & Code Change | EP13",
      description: null,
      videoId: "2KdoPKvTqS4",
      videoUrl: "https://www.youtube.com/watch?v=2KdoPKvTqS4"
    },
    {
      title: "DEPLOY .NET Core 8 Apps with EASE using Azure DevOps!",
      description: null,
      videoId: "76Cw67rMWUY",
      videoUrl: "https://www.youtube.com/watch?v=76Cw67rMWUY"
    },
    {
      title: "ANGULAR 18 Expert Reveals Top Secrets to Mastering Azure DevOps",
      description: null,
      videoId: "OlJD-XNUNXc",
      videoUrl: "https://www.youtube.com/watch?v=OlJD-XNUNXc"
    },
    {
      title: "Get Ahead of Errors with .NET Core 8 and Application Insights Today!",
      description: null,
      videoId: "2R7-YMlN20k",
      videoUrl: "https://www.youtube.com/watch?v=2R7-YMlN20k"
    },
    {
      title: "What's Hiding in Your App Settings? Azure Web App Security Secrets!",
      description: null,
      videoId: "A3MIg862kDU",
      videoUrl: "https://www.youtube.com/watch?v=A3MIg862kDU"
    },
    {
      title: "SHOCKING Azure SQL Server Secrets Revealed - Database Setup Made Easy",
      description: null,
      videoId: "O5RfYfTA5ig",
      videoUrl: "https://www.youtube.com/watch?v=O5RfYfTA5ig"
    },
    {
      title: "MIND-BLOWING NET Core 8 Secrets for Faster Endpoint Creation Revealed",
      description: null,
      videoId: "8KihrPglR2o",
      videoUrl: "https://www.youtube.com/watch?v=8KihrPglR2o"
    },
    {
      title: "EP4: Angular 18 Standalone Setup | Project Overview, Component Creation & ngx-bootstrap Integration",
      description: null,
      videoId: "m6Nbufaxz3g",
      videoUrl: "https://www.youtube.com/watch?v=m6Nbufaxz3g"
    },
    {
      title: "EP3: Setting Up .NET Core API Project & EF Core Integration | Scaffolding & Dependency Injection",
      description: null,
      videoId: "CATF49Frgrw",
      videoUrl: "https://www.youtube.com/watch?v=CATF49Frgrw"
    },
    {
      title: "Secure Your Angular App: Azure AD B2C Authentication Made Easy",
      description: null,
      videoId: "yRv0DJi2iSk",
      videoUrl: "https://www.youtube.com/watch?v=yRv0DJi2iSk"
    },
    {
      title: "Master Azure AD Authentication in 30 Minutes with Angular and .NET Core 8!",
      description: null,
      videoId: "rgPZVmsMf5c",
      videoUrl: "https://www.youtube.com/watch?v=rgPZVmsMf5c"
    },
    {
      title: "EP2: SQL Basics & Database Design for Online Course App | .NET Core & Angular Project | SQL Server",
      description: null,
      videoId: "HeFUVRUPDxU",
      videoUrl: "https://www.youtube.com/watch?v=HeFUVRUPDxU"
    },
    {
      title: "Get Ready to Master Angular .Net Core 8 Azure in 30 Days | Road Map",
      description: null,
      videoId: "FRDWi9WWkRc",
      videoUrl: "https://www.youtube.com/watch?v=FRDWi9WWkRc"
    },
    {
      title: "Deploy Angular App to Azure Web App with Azure DevOps | CI/CD Pipeline | Multi-Stage Deployment",
      description: null,
      videoId: "fqI0ToX1nDQ",
      videoUrl: "https://www.youtube.com/watch?v=fqI0ToX1nDQ"
    },
    {
      title: ".NET Core 8 | Database Migrations with Model First Approach | Web API | Entity Framework Tools",
      description: null,
      videoId: "kR6ylbbsGIE",
      videoUrl: "https://www.youtube.com/watch?v=kR6ylbbsGIE"
    },
    {
      title: "WARNING Don't Make This HTTP Interceptor Mistake in Angular 18",
      description: null,
      videoId: "hCeE1_B5NoE",
      videoUrl: "https://www.youtube.com/watch?v=hCeE1_B5NoE"
    },
    {
      title: "Angular 18 | Expense Tracker App | Demo & Features | Standalone | Azure AD B2C Authentication",
      description: null,
      videoId: "RiS229ty-SM",
      videoUrl: "https://www.youtube.com/watch?v=RiS229ty-SM"
    },
    {
      title: "Determine Blob Storage Pricing in Azure | Comprehensive Cost Guide | Azure Tips and Tricks",
      description: null,
      videoId: "qroMqbGTl0k",
      videoUrl: "https://www.youtube.com/watch?v=qroMqbGTl0k"
    },
    {
      title: "Automate Azure Blobs Lifecycle Management | Azure Storage Lifecycle Policies | Azure Tricks and Tips",
      description: null,
      videoId: "i9j4nDKl_7U",
      videoUrl: "https://www.youtube.com/watch?v=i9j4nDKl_7U"
    },
    {
      title: "How to Move Azure Storage Blobs Between Containers with Storage Explorer | Azure Tips & Tricks",
      description: null,
      videoId: "Md0u05679Pg",
      videoUrl: "https://www.youtube.com/watch?v=Md0u05679Pg"
    },
    {
      title: "Microsoft Entra ID EXPERT Shares Top Azure AD Secrets",
      description: null,
      videoId: "2Pw3YiVy-0k",
      videoUrl: "https://www.youtube.com/watch?v=2Pw3YiVy-0k"
    },
    {
      title: ".NET Core 8 Web API Crash Course | Step-by-Step Tutorials for Beginners | Microservice | EF Core",
      description: null,
      videoId: "_2CWPQfzLJo",
      videoUrl: "https://www.youtube.com/watch?v=_2CWPQfzLJo"
    },
    {
      title: "SQL Database Design for absolute Beginner | A Step-by-Step Guide |  Database Design for .Net Core 8",
      description: null,
      videoId: "ur-f_tyQ0Ic",
      videoUrl: "https://www.youtube.com/watch?v=ur-f_tyQ0Ic"
    },
    {
      title: "Master RxJS Creation Operators of, from, interval, timer | RxJS and Angular Tutorial",
      description: null,
      videoId: "BgHphtY8IPE",
      videoUrl: "https://www.youtube.com/watch?v=BgHphtY8IPE"
    },
    {
      title: "Master Angular Signals in 2024 and Boost Your Productivity",
      description: null,
      videoId: "WGYMLyEMIYg",
      videoUrl: "https://www.youtube.com/watch?v=WGYMLyEMIYg"
    },
    {
      title: "AZ-204 Key Vault Masterclass: Secrets, Security, and Best Practices Explained",
      description: null,
      videoId: "Acm18rVby3s",
      videoUrl: "https://www.youtube.com/watch?v=Acm18rVby3s"
    },
    {
      title: "AZ-204 Securing Azure Storage with Key Vault Keys & SSE | Storage Service Encryption | Key Vault Key",
      description: null,
      videoId: "lDT2-XQ-VG8",
      videoUrl: "https://www.youtube.com/watch?v=lDT2-XQ-VG8"
    },
    {
      title: "AZ-204: Implementing Soft Delete and Purge Protection for Azure Key Vaults | Real-Time Demo",
      description: null,
      videoId: "vs-tcYnQRww",
      videoUrl: "https://www.youtube.com/watch?v=vs-tcYnQRww"
    },
    {
      title: "AZ-204 Securing Azure App Settings with Key Vault References: Runtime Secret Retrieval | Web API",
      description: null,
      videoId: "zQh6KWEMN4M",
      videoUrl: "https://www.youtube.com/watch?v=zQh6KWEMN4M"
    },
    {
      title: "AZ-204 Securing Azure Key Vault with Azure AD App Registration: Client ID and Secret Authentication",
      description: null,
      videoId: "lGMIuIf3psA",
      videoUrl: "https://www.youtube.com/watch?v=lGMIuIf3psA"
    },
    {
      title: "AZ-204 Unlocking Azure Key Vault Secrets with .NET Core: Enabling System Identity & Access Policies",
      description: null,
      videoId: "5O08RAhUY8Y",
      videoUrl: "https://www.youtube.com/watch?v=5O08RAhUY8Y"
    },
    {
      title: "AZ-204 Azure: Understanding the Difference Between Service Principal and Managed Identity",
      description: null,
      videoId: "kFgDSQ2jErk",
      videoUrl: "https://www.youtube.com/watch?v=kFgDSQ2jErk"
    },
    {
      title: "Azure Managed Identity Interview Questions: Mastering Secure Authentication in Azure | AZ-204",
      description: null,
      videoId: "jcVW4lznxfw",
      videoUrl: "https://www.youtube.com/watch?v=jcVW4lznxfw"
    },
    {
      title: "Azure Managed Identity Demo: System & User Identities | AZ-204 Tutorial | Azure | Real-time demo",
      description: null,
      videoId: "K6Fqanf1Ie0",
      videoUrl: "https://www.youtube.com/watch?v=K6Fqanf1Ie0"
    },
    {
      title: "I MASTERED Azure RBAC in 30 Days and Got AZ-204 Certified!",
      description: null,
      videoId: "iKdxk4MWHfA",
      videoUrl: "https://www.youtube.com/watch?v=iKdxk4MWHfA"
    },
    {
      title: "Mastering Azure RBAC: In-Depth Demo and Custom Role Creation Explained | Azure RBAC Tutorial",
      description: null,
      videoId: "zhYW-cIsM9E",
      videoUrl: "https://www.youtube.com/watch?v=zhYW-cIsM9E"
    },
    {
      title: "AZ-204 Azure Key Vault Tutorial | Keys, Secret & Certificate concepts explained | Azure",
      description: null,
      videoId: "0VOHrOHM2qU",
      videoUrl: "https://www.youtube.com/watch?v=0VOHrOHM2qU"
    },
    {
      title: "Mastering Azure RBAC: Exploring Role-Based Access Control for Azure Resources | RBAC Authorization",
      description: null,
      videoId: "UmtTaZRQiPs",
      videoUrl: "https://www.youtube.com/watch?v=UmtTaZRQiPs"
    },
    {
      title: "Mastering Angular FULL COURSE for Frontend Developers in 2024!",
      description: null,
      videoId: "Pa_u6cdq6E4",
      videoUrl: "https://www.youtube.com/watch?v=Pa_u6cdq6E4"
    },
    {
      title: "E-Commerce Angular Dev Series | Seamless Checkout Process and Order Management | Final Episode",
      description: null,
      videoId: "LkUqSXMW9M4",
      videoUrl: "https://www.youtube.com/watch?v=LkUqSXMW9M4"
    },
    {
      title: "E-Commerce Angular Dev Series | User Address Management with Reactive Forms | EP16",
      description: null,
      videoId: "vUcp6FFVC_I",
      videoUrl: "https://www.youtube.com/watch?v=vUcp6FFVC_I"
    },
    {
      title: "E-Commerce Angular Dev Series | Enhancing User Experience with Resolver & Spinner Integration | EP15",
      description: null,
      videoId: "_ZtGG_C8A-w",
      videoUrl: "https://www.youtube.com/watch?v=_ZtGG_C8A-w"
    },
    {
      title: "E-Commerce Angular Dev Series | Implementing Route Guards with CanActivateFn and CanActivateChildFn",
      description: null,
      videoId: "iZ2Rtgmr_S0",
      videoUrl: "https://www.youtube.com/watch?v=iZ2Rtgmr_S0"
    },
    {
      title: "E-Commerce Angular Dev Series | Set Page Title dynamically using Title Service and Router | EP13",
      description: null,
      videoId: "sBaSHhLg6c8",
      videoUrl: "https://www.youtube.com/watch?v=sBaSHhLg6c8"
    },
    {
      title: "Configuring Azure AD B2C Authentication & Authorization for .NET Core 8 Web API & Angular | Tutorial",
      description: null,
      videoId: "9RQKHmE9EqQ",
      videoUrl: "https://www.youtube.com/watch?v=9RQKHmE9EqQ"
    },
    {
      title: "Deploying Angular App to Azure App Service | CI/CD with Azure Devops pipeline | Build & Upload",
      description: null,
      videoId: "eSDbhH6ry7Q",
      videoUrl: "https://www.youtube.com/watch?v=eSDbhH6ry7Q"
    },
    {
      title: ".NET Core 8: The Future of Cloud Deployment",
      description: null,
      videoId: "ROubANs0OOI",
      videoUrl: "https://www.youtube.com/watch?v=ROubANs0OOI"
    },
    {
      title: "How to implement Resolver in Angular 17 | Angular Resolver | Route Resolver | Angular 17",
      description: null,
      videoId: "_ATT64MLmfk",
      videoUrl: "https://www.youtube.com/watch?v=_ATT64MLmfk"
    },
    {
      title: "E-Commerce Angular Dev Series | Building a Dynamic Shopping Cart with Real-Time Updates | EP9",
      description: null,
      videoId: "3ZLfflUR1vQ",
      videoUrl: "https://www.youtube.com/watch?v=3ZLfflUR1vQ"
    },
    {
      title: "E-Commerce Angular Dev Series | Utilizing Query Parameters for Dynamic Search | EP8",
      description: null,
      videoId: "mx95lEz0rEc",
      videoUrl: "https://www.youtube.com/watch?v=mx95lEz0rEc"
    },
    {
      title: "E-Commerce Angular Dev Series | User Idle Detection with ng-idle & ng-idle/keepalive | EP7",
      description: null,
      videoId: "IGJMHaQsez0",
      videoUrl: "https://www.youtube.com/watch?v=IGJMHaQsez0"
    },
    {
      title: "E-Commerce Angular Dev Series | Exploring Input, Output & Lifecycle Hooks | Real-Time Examples | EP6",
      description: null,
      videoId: "ZyaLQNJYI-E",
      videoUrl: "https://www.youtube.com/watch?v=ZyaLQNJYI-E"
    },
    {
      title: "E-Commerce Angular Dev Series | HTTP Service and Routing | EP5 | Web API | Angular 16",
      description: null,
      videoId: "xBguvt6XbgU",
      videoUrl: "https://www.youtube.com/watch?v=xBguvt6XbgU"
    },
    {
      title: "How to Upload Images to Azure Storage (and why you should)",
      description: null,
      videoId: "iGR1ZUUxIQw",
      videoUrl: "https://www.youtube.com/watch?v=iGR1ZUUxIQw"
    },
    {
      title: "AZ-204 Azure Storage Accounts & Blobs | Container Creation, File Uploads, SAS | Azure",
      description: null,
      videoId: "8PnU8DWx9Rw",
      videoUrl: "https://www.youtube.com/watch?v=8PnU8DWx9Rw"
    },
    {
      title: "E-Commerce Angular Dev Series | NgModules, Routing, Lazy Loading | EP4 | Angular 16",
      description: null,
      videoId: "fVbFlQSb2uY",
      videoUrl: "https://www.youtube.com/watch?v=fVbFlQSb2uY"
    },
    {
      title: "E-Commerce Angular Developer Series | NgModules Explained with simple example | EP3",
      description: null,
      videoId: "lifXMmpqkcM",
      videoUrl: "https://www.youtube.com/watch?v=lifXMmpqkcM"
    },
    {
      title: "E-Commerce Angular Developer Series | Data Bindings | Angular Directives | EP2 | Angular 16",
      description: null,
      videoId: "yZKIjFHYLzY",
      videoUrl: "https://www.youtube.com/watch?v=yZKIjFHYLzY"
    },
    {
      title: "Angular 17 Navigation Guards Demo: CanDeactivateFn, CanActivateFn, CanActivateChildFn",
      description: null,
      videoId: "Gm6FfkIsTC8",
      videoUrl: "https://www.youtube.com/watch?v=Gm6FfkIsTC8"
    },
    {
      title: "E-Commerce Angular Developer Series | Setting Up Your Angular Environment | EP1",
      description: null,
      videoId: "tBvXGwxw7Jw",
      videoUrl: "https://www.youtube.com/watch?v=tBvXGwxw7Jw"
    },
    {
      title: "Practice Assessment for Exam AZ 900: Microsoft Azure Fundamentals | Pass AZ-900 Exam | Q&A | Azure",
      description: null,
      videoId: "4deUZiI34G8",
      videoUrl: "https://www.youtube.com/watch?v=4deUZiI34G8"
    },
    {
      title: "Master Azure Cost Management | Price Calculator Tutorial for Service Cost Tracking | Free Azure",
      description: null,
      videoId: "XvvjGw4WOb0",
      videoUrl: "https://www.youtube.com/watch?v=XvvjGw4WOb0"
    },
    {
      title: "Unlocking the Power of Azure AD B2C Business to Consumers | Short Tutorial | AD B2C #adb2c #azure",
      description: null,
      videoId: "o83Nb2kOxXY",
      videoUrl: "https://www.youtube.com/watch?v=o83Nb2kOxXY"
    },
    {
      title: "Master Exam AZ-900: Microsoft Azure Fundamentals with 5 Practice Questions | Part 1  #azure #az900",
      description: null,
      videoId: "cRdHEvyFncA",
      videoUrl: "https://www.youtube.com/watch?v=cRdHEvyFncA"
    },
    {
      title: "Master Azure AD B2B: Simplifying External User Access in a Snap! | AD B2B #azure #adb2b",
      description: null,
      videoId: "cj4vRi67XWg",
      videoUrl: "https://www.youtube.com/watch?v=cj4vRi67XWg"
    },
    {
      title: "Effortless GitHub Integration Pushing Local Code with Visual Studio IDE Tutorial",
      description: null,
      videoId: "wLQJFMWGiDc",
      videoUrl: "https://www.youtube.com/watch?v=wLQJFMWGiDc"
    },
    {
      title: "Study guide for Exam AZ 204: Developing Solutions for Microsoft Azure | Free | 50% discount",
      description: null,
      videoId: "WZxRUpDt0Jo",
      videoUrl: "https://www.youtube.com/watch?v=WZxRUpDt0Jo"
    },
    {
      title: "How to Enrich Azure AD B2C Token with Custom Claims using API Connector | Call DB to save data",
      description: null,
      videoId: "XfsNuN3kseI",
      videoUrl: "https://www.youtube.com/watch?v=XfsNuN3kseI"
    },
    {
      title: "E-Commerce 4 Microservices using .NET Core 8, EF Core 8 full project walkthrough | AD B2C | Azure",
      description: null,
      videoId: "e405NKk89nA",
      videoUrl: "https://www.youtube.com/watch?v=e405NKk89nA"
    },
    {
      title: "How to use .Net Core, EF Core with Azure HTTP Trigger functions | Azure SQL #efcore #azurefunctions",
      description: null,
      videoId: "S7kP-vqwRww",
      videoUrl: "https://www.youtube.com/watch?v=S7kP-vqwRww"
    },
    {
      title: "Free Azure SQL Database for a Lifetime | Free SQL DB for the lifetime of your subscription #azuresql",
      description: null,
      videoId: "-o1iKd_eT6g",
      videoUrl: "https://www.youtube.com/watch?v=-o1iKd_eT6g"
    },
    {
      title: "Mastering E-Commerce Database Design: A Step by Step Guide | Full Stack Developer Path | SQL",
      description: null,
      videoId: "yhMmeB56a20",
      videoUrl: "https://www.youtube.com/watch?v=yhMmeB56a20"
    },
    {
      title: "Mastering Full Stack Development Roadmap: Building E-commerce App with .NET 8, Azure, and Angular 17",
      description: null,
      videoId: "bsU6OIV60IE",
      videoUrl: "https://www.youtube.com/watch?v=bsU6OIV60IE"
    },
    {
      title: "EF Core 8: Only the invariant culture is supported in globalization-invariant mode | .Net Core 8",
      description: null,
      videoId: "Eg7k3v0rVwM",
      videoUrl: "https://www.youtube.com/watch?v=Eg7k3v0rVwM"
    },
    {
      title: "Unlocking Azure AD B2C Secrets: Access Token vs. ID Token vs. Refresh Tokens Explained! #azuread",
      description: null,
      videoId: "w_a5PtgFUXQ",
      videoUrl: "https://www.youtube.com/watch?v=w_a5PtgFUXQ"
    },
    {
      title: "OAuth 2.0 & OpenID Connect Demystified: Azure AD B2C Explained with Real Examples! #oauth2 #azuread",
      description: null,
      videoId: "fCFDJaGBAJA",
      videoUrl: "https://www.youtube.com/watch?v=fCFDJaGBAJA"
    },
    {
      title: "Mastering Azure AD B2C: Fundamentals and Key Features with Real-world Examples #b2c #azure #azuread",
      description: null,
      videoId: "WWyrRYGWumQ",
      videoUrl: "https://www.youtube.com/watch?v=WWyrRYGWumQ"
    },
    {
      title: "Upgrading your .NET projects with Visual Studio using Upgrade Assistant | .Net 8 | Upgrade Assistant",
      description: null,
      videoId: "XAheI0Jx8vs",
      videoUrl: "https://www.youtube.com/watch?v=XAheI0Jx8vs"
    },
    {
      title: "MASTER Full Stack Web Development with Angular 16, DOTNET Core, Azure & Docker!",
      description: null,
      videoId: "70q8PanGbnw",
      videoUrl: "https://www.youtube.com/watch?v=70q8PanGbnw"
    },
    {
      title: "Docker for Beginners: Deploying Containers to Azure",
      description: null,
      videoId: "-UMvQhbYc5o",
      videoUrl: "https://www.youtube.com/watch?v=-UMvQhbYc5o"
    },
    {
      title: "SQL vs NoSQL: Which One Is Right For You?",
      description: null,
      videoId: "kaV7erydLO0",
      videoUrl: "https://www.youtube.com/watch?v=kaV7erydLO0"
    },
    {
      title: "Web API vs Web App: The TRUTH Explained",
      description: null,
      videoId: "wK26w6A2JZ0",
      videoUrl: "https://www.youtube.com/watch?v=wK26w6A2JZ0"
    },
    {
      title: "Microservices Explained in 60 Seconds!",
      description: null,
      videoId: "l9_uuFAmqa8",
      videoUrl: "https://www.youtube.com/watch?v=l9_uuFAmqa8"
    },
    {
      title: "Exploring Services in Angular - A Quick Guide | Angular 16 | Services in Angular | DI | #angular",
      description: null,
      videoId: "PKnOM9TvGHs",
      videoUrl: "https://www.youtube.com/watch?v=PKnOM9TvGHs"
    },
    {
      title: "Creating a User in Azure Portal and Assigning a Role | Step-by-Step Guide | #azure",
      description: null,
      videoId: "LCt5SBj_ANs",
      videoUrl: "https://www.youtube.com/watch?v=LCt5SBj_ANs"
    },
    {
      title: "How to Create a Managed Identity in Azure | Step-by-Step Guide #security #azure",
      description: null,
      videoId: "xzRgQ-2SaSE",
      videoUrl: "https://www.youtube.com/watch?v=xzRgQ-2SaSE"
    },
    {
      title: "Azure Application Insights: The Ultimate Beginner's Guide",
      description: null,
      videoId: "miileqZnn0s",
      videoUrl: "https://www.youtube.com/watch?v=miileqZnn0s"
    },
    {
      title: "Master Angular Interview Questions with Live Examples | Top 10 Angular Q&A | #AngularTips",
      description: null,
      videoId: "ok_2hNPBYhw",
      videoUrl: "https://www.youtube.com/watch?v=ok_2hNPBYhw"
    },
    {
      title: "Master Angular Authentication & Role-Based Authorization in Azure AD B2C | Custom Claims | #b2c",
      description: null,
      videoId: "7iJC1oQXyQE",
      videoUrl: "https://www.youtube.com/watch?v=7iJC1oQXyQE"
    },
    {
      title: "How to Create a Custom Azure AD B2C Login Page (and Why You Should)",
      description: null,
      videoId: "ZF5ZsJBp54A",
      videoUrl: "https://www.youtube.com/watch?v=ZF5ZsJBp54A"
    },
    {
      title: "Optimize Angular App Performance with Azure Front Door CDN | Setup Guide | #Azure #CDN #performance",
      description: null,
      videoId: "T1u3um483h0",
      videoUrl: "https://www.youtube.com/watch?v=T1u3um483h0"
    },
    {
      title: "Optimize Angular Static Files with Azure Storage | #azure  #storage",
      description: null,
      videoId: "kBJBIMeceH4",
      videoUrl: "https://www.youtube.com/watch?v=kBJBIMeceH4"
    },
    {
      title: "Master .NET Core Web API Interview Questions | Top 10+ FAQs Q & As | #interviewtips  #dotnetcore",
      description: null,
      videoId: "KoFRt1gN49c",
      videoUrl: "https://www.youtube.com/watch?v=KoFRt1gN49c"
    },
    {
      title: "Efficient Angular CI/CD Setup & Azure Web App Deployment | Azure DevOps Pipeline Guide #cicd #devops",
      description: null,
      videoId: "AryMYqOt_UE",
      videoUrl: "https://www.youtube.com/watch?v=AryMYqOt_UE"
    },
    {
      title: "Leverage .NET Core 7 Background Service for Scheduled Email Notifications | Tutorial #csharp11",
      description: null,
      videoId: "PmZtFj-K-og",
      videoUrl: "https://www.youtube.com/watch?v=PmZtFj-K-og"
    },
    {
      title: "Creating a Task Management Web App with Angular and Cosmos DB | Reactive Forms | Angular Tutorial",
      description: null,
      videoId: "78aBcZ_-5Gc",
      videoUrl: "https://www.youtube.com/watch?v=78aBcZ_-5Gc"
    },
    {
      title: "Python 3 Fundamentals | Age Calculator Demo using Data Types, input, output, print functions| EP4",
      description: null,
      videoId: "E1HtD-nWRPI",
      videoUrl: "https://www.youtube.com/watch?v=E1HtD-nWRPI"
    },
    {
      title: "Python 3 Fundamentals: Data Types, Primitive Data Types, Strings, Input, Output, Int, Float | EP3",
      description: null,
      videoId: "JSAgzS0lwcY",
      videoUrl: "https://www.youtube.com/watch?v=JSAgzS0lwcY"
    },
    {
      title: "Python 3 Fundamentals: Variables, Data Types, Print Function & Demos | Beginner's Guide | EP2",
      description: null,
      videoId: "NBpQw4iv9jU",
      videoUrl: "https://www.youtube.com/watch?v=NBpQw4iv9jU"
    },
    {
      title: "Automated Email Notifications with SendGrid in .NET 7: Booking Confirmations Notification | Part 17",
      description: null,
      videoId: "ejAxDXbc6IQ",
      videoUrl: "https://www.youtube.com/watch?v=ejAxDXbc6IQ"
    },
    {
      title: "Python 3 fundamentals | Python Tutorial Series | Introduction and Python Setup for development | EP1",
      description: null,
      videoId: "Tx45dDDNmEc",
      videoUrl: "https://www.youtube.com/watch?v=Tx45dDDNmEc"
    },
    {
      title: ".NET Web API Interview Questions | #csharp #interview #dotnetcore",
      description: null,
      videoId: "VCE7dm-KCEU",
      videoUrl: "https://www.youtube.com/watch?v=VCE7dm-KCEU"
    },
    {
      title: "Azure AD B2C: Enrich Tokens with External Claims using API Connectors | .Net Core 7 | Functions",
      description: null,
      videoId: "KKkgKMMyZFw",
      videoUrl: "https://www.youtube.com/watch?v=KKkgKMMyZFw"
    },
    {
      title: "Azure AD B2C User Management with Graph API & Client Credentials | Graph API",
      description: null,
      videoId: "q00CiSh0H-o",
      videoUrl: "https://www.youtube.com/watch?v=q00CiSh0H-o"
    },
    {
      title: "Azure AD B2C Setup: User Flows, App Registration, & Integration with .NET Core 7 API and Angular 16",
      description: null,
      videoId: "qPYk_tNc1r8",
      videoUrl: "https://www.youtube.com/watch?v=qPYk_tNc1r8"
    },
    {
      title: "Mastering ASP NET Core Rate Limiting Strategies in C# NET 7 | Web Api | LSC | #csharp #dotnetcore",
      description: null,
      videoId: "HrnuLK6O1Ps",
      videoUrl: "https://www.youtube.com/watch?v=HrnuLK6O1Ps"
    },
    {
      title: ".NET Core 7 Web API Output Caching for Faster Web Apps | Web API | New Feature | C# | #dotnetcore",
      description: null,
      videoId: "zIlfhmmEYOE",
      videoUrl: "https://www.youtube.com/watch?v=zIlfhmmEYOE"
    },
    {
      title: "Restaurant Table Booking App | Part 13: User Check-In Process and Reservation Status Update | LSC",
      description: null,
      videoId: "iYPQYH0EOAI",
      videoUrl: "https://www.youtube.com/watch?v=iYPQYH0EOAI"
    },
    {
      title: "C# 11 new features : Auto Default Struct & UTF-8 Explained | #CSharp11 #Programming",
      description: null,
      videoId: "x0W12oXTBE0",
      videoUrl: "https://www.youtube.com/watch?v=x0W12oXTBE0"
    },
    {
      title: "C# 11 new features: Required Properties, File-Scoped, & List Patterns | #CSharp11 #Programming",
      description: null,
      videoId: "fG2CkUwDwz4",
      videoUrl: "https://www.youtube.com/watch?v=fG2CkUwDwz4"
    },
    {
      title: "Exploring Literal Strings in C# 11 Your Ultimate Guide | C# new features | #CSharp11 #Programming",
      description: null,
      videoId: "ha7jKVcHUko",
      videoUrl: "https://www.youtube.com/watch?v=ha7jKVcHUko"
    },
    {
      title: "C# 11's Required Properties Explained | C# 11 new features | #CSharp11 #Programming",
      description: null,
      videoId: "azPvltPOmkM",
      videoUrl: "https://www.youtube.com/watch?v=azPvltPOmkM"
    },
    {
      title: "Auto-Default Struct Fields in C# 11 | C# new features | Learn Smart Coding | #CSharp11 #Programming",
      description: null,
      videoId: "jTtINwWnzUs",
      videoUrl: "https://www.youtube.com/watch?v=jTtINwWnzUs"
    },
    {
      title: "C# 11 new feature: The Power of UTF-8 Suffix | C# | Learn Smart Coding | #CSharp11 #Programming",
      description: null,
      videoId: "kNZvgVlLLM4",
      videoUrl: "https://www.youtube.com/watch?v=kNZvgVlLLM4"
    },
    {
      title: "Mastering C# 11: Literal Strings with Real-time Examples | C# new features | #CSharp11 #Programming",
      description: null,
      videoId: "sje2-76ZV3Q",
      videoUrl: "https://www.youtube.com/watch?v=sje2-76ZV3Q"
    },
    {
      title: "Mastering File Scoped Types in C# 11 | C# 11 Features | Learn Smart Coding | #CSharp11 #Programming",
      description: null,
      videoId: "_MmiH6FfOLQ",
      videoUrl: "https://www.youtube.com/watch?v=_MmiH6FfOLQ"
    },
    {
      title: "Mastering List Pattern Matching in C# 11 | C# 11 new Features | #CSharp11 #Programming",
      description: null,
      videoId: "UGtqI7BLrTI",
      videoUrl: "https://www.youtube.com/watch?v=UGtqI7BLrTI"
    },
    {
      title: "Restaurant Table Booking App | Part 12: Angular 16  Restaurant Selection, Table Booking & User Info",
      description: null,
      videoId: "tbACz0a23RM",
      videoUrl: "https://www.youtube.com/watch?v=tbACz0a23RM"
    },
    {
      title: "Supercharge Your C# Productivity: Mastering Code Snippets | #csharp | #CodeSnippets | LSC",
      description: null,
      videoId: "DGk2O9_9eS4",
      videoUrl: "https://www.youtube.com/watch?v=DGk2O9_9eS4"
    },
    {
      title: "Boost Your Angular Coding with Snippets and CLI Shortcuts | #angular  | Learn Smart Coding",
      description: null,
      videoId: "yosjgHQdPlQ",
      videoUrl: "https://www.youtube.com/watch?v=yosjgHQdPlQ"
    },
    {
      title: "Exploring SAS (Shared Access Signatures): Secure Data Sharing Made Simple | SAS | Learn Smart Coding",
      description: null,
      videoId: "DvP672XIdNM",
      videoUrl: "https://www.youtube.com/watch?v=DvP672XIdNM"
    },
    {
      title: "CORS Essentials: Grasping the Concept of Cross-Origin Resource Sharing | CORS | Learn smart Coding",
      description: null,
      videoId: "zkfCUFqThro",
      videoUrl: "https://www.youtube.com/watch?v=zkfCUFqThro"
    },
    {
      title: "What is async/await and how it benefits async programming | async | await | C# | Learn Smart Coding",
      description: null,
      videoId: "kgNKKiQEoy0",
      videoUrl: "https://www.youtube.com/watch?v=kgNKKiQEoy0"
    },
    {
      title: "What is CDN ? | Content Delivery Network | Learn Smart Coding",
      description: null,
      videoId: "TGtRk1OHPsU",
      videoUrl: "https://www.youtube.com/watch?v=TGtRk1OHPsU"
    },
    {
      title: "Restaurant Table Reservation | Angular Application Part 1 Demo | Bootstrap Free Template | Angular",
      description: null,
      videoId: "r5jfsXW-Ou0",
      videoUrl: "https://www.youtube.com/watch?v=r5jfsXW-Ou0"
    },
    {
      title: "The Power of Artificial Intelligence (AI) Explained | Learn Smart Coding",
      description: null,
      videoId: "y3tZHNfUPVU",
      videoUrl: "https://www.youtube.com/watch?v=y3tZHNfUPVU"
    },
    {
      title: "Creating Stunning Angular UIs Integrating and Customizing Bootstrap Free Templates | Restaurant App",
      description: null,
      videoId: "1Cnydfz_jtg",
      videoUrl: "https://www.youtube.com/watch?v=1Cnydfz_jtg"
    },
    {
      title: "Restaurant Table Booking App | Part 11: Automating CI/CD  through Deployment Center in GitHub Action",
      description: null,
      videoId: "qdmkFu-4GNo",
      videoUrl: "https://www.youtube.com/watch?v=qdmkFu-4GNo"
    },
    {
      title: "Restaurant Table Booking App | Part 10: Provision Azure Function in Portal & deploy from VS | LSC",
      description: null,
      videoId: "GIbdfpJ1Hp4",
      videoUrl: "https://www.youtube.com/watch?v=GIbdfpJ1Hp4"
    },
    {
      title: "Restaurant Table Booking App   Part 9 Automating Timeslot Generation with Azure Timer Function",
      description: null,
      videoId: "QdYX8-DE7XI",
      videoUrl: "https://www.youtube.com/watch?v=QdYX8-DE7XI"
    },
    {
      title: "What is Azure Cloud ? | Learn Smart Coding",
      description: null,
      videoId: "IMizn8hMSnc",
      videoUrl: "https://www.youtube.com/watch?v=IMizn8hMSnc"
    },
    {
      title: "What are HTTP Verbs ? | Learn Smart Coding",
      description: null,
      videoId: "4PC8na-cXkY",
      videoUrl: "https://www.youtube.com/watch?v=4PC8na-cXkY"
    },
    {
      title: "What is a Microservice ? | Learn Smart Coding",
      description: null,
      videoId: "hj3jd6TZ-2M",
      videoUrl: "https://www.youtube.com/watch?v=hj3jd6TZ-2M"
    },
    {
      title: "Web Service vs  Web API:   What's the Difference ? | Learn Smart Coding",
      description: null,
      videoId: "d2zKweY2i5Y",
      videoUrl: "https://www.youtube.com/watch?v=d2zKweY2i5Y"
    },
    {
      title: "What is Web API ? | Learn Smart Coding",
      description: null,
      videoId: "-AV0RHIzMDs",
      videoUrl: "https://www.youtube.com/watch?v=-AV0RHIzMDs"
    },
    {
      title: "Restaurant Table Booking App | Part 8: Configure Serilog & Application Insights in Azure | LSC",
      description: null,
      videoId: "sKMRPqMeau8",
      videoUrl: "https://www.youtube.com/watch?v=sKMRPqMeau8"
    },
    {
      title: "Restaurant Table Booking App | Part 7: Deploying and Hosting on Azure Web App",
      description: null,
      videoId: "PUHQWFENups",
      videoUrl: "https://www.youtube.com/watch?v=PUHQWFENups"
    },
    {
      title: "Restaurant Table Booking App | Part 6: Building Restaurant Controller & Retrieving Data Endpoints",
      description: null,
      videoId: "yDVzpWwHqMY",
      videoUrl: "https://www.youtube.com/watch?v=yDVzpWwHqMY"
    },
    {
      title: "Restaurant Table Booking App | Part 5: Database Migrations & Table Enhancements | DOTNET EF | LSC",
      description: null,
      videoId: "V_-I2Mylcws",
      videoUrl: "https://www.youtube.com/watch?v=V_-I2Mylcws"
    },
    {
      title: "Restaurant Table Booking App | Part 4: Setting Up  NET Core Web API and Entity Framework Core",
      description: null,
      videoId: "SoVjkYV-ZtE",
      videoUrl: "https://www.youtube.com/watch?v=SoVjkYV-ZtE"
    },
    {
      title: "Restaurant Table Booking App | Part 3:  Azure SQL Setup & DB Initialization | Azure | LSC",
      description: null,
      videoId: "8dQ9ZazO7Zc",
      videoUrl: "https://www.youtube.com/watch?v=8dQ9ZazO7Zc"
    },
    {
      title: "Restaurant Table Booking App  |  Part 2: Database Design and Setup | Azure | LSC",
      description: null,
      videoId: "SflcmSprRR4",
      videoUrl: "https://www.youtube.com/watch?v=SflcmSprRR4"
    },
    {
      title: "Restaurant Table Booking App | Part 1: Architectural Overview and Tech Stack | Full Stack App | LSC",
      description: null,
      videoId: "-VPAOzOFlcM",
      videoUrl: "https://www.youtube.com/watch?v=-VPAOzOFlcM"
    },
    {
      title: "Preserve Data: Upload Images & Logging in .NET Core Web API with Azure File Share & Docker Volumes",
      description: null,
      videoId: "_dA4JT1iSLs",
      videoUrl: "https://www.youtube.com/watch?v=_dA4JT1iSLs"
    },
    {
      title: "Uploading Images & Logging with Docker Volume in .NET Core Web API Mounting Local Drive to Container",
      description: null,
      videoId: "p642xZcMQuc",
      videoUrl: "https://www.youtube.com/watch?v=p642xZcMQuc"
    },
    {
      title: "Azure DevOps CI/CD Pipeline Build, Push Deploy to Azure Container Registry & deploy to Azure Web App",
      description: null,
      videoId: "v1HL-QnKSZA",
      videoUrl: "https://www.youtube.com/watch?v=v1HL-QnKSZA"
    },
    {
      title: "Logging & Exception Handling in Azure Web Apps Running in Containers with Serilog & AppInsight",
      description: null,
      videoId: "4uz1RiThij8",
      videoUrl: "https://www.youtube.com/watch?v=4uz1RiThij8"
    },
    {
      title: "Deploy Multiple Docker Images to Azure Web App using Azure Container Registry | ACR | LSC",
      description: null,
      videoId: "q6LgPWDBnf4",
      videoUrl: "https://www.youtube.com/watch?v=q6LgPWDBnf4"
    },
    {
      title: "Deploy Multiple Docker Images to Azure Web App using Docker Registry and Docker Hub | LSC",
      description: null,
      videoId: "rBc93sCcwIE",
      videoUrl: "https://www.youtube.com/watch?v=rBc93sCcwIE"
    },
    {
      title: "How to build .NET Core 7 Web API using Cosmos DB in an hour | WEB API Crash Course | .NET | LSC",
      description: null,
      videoId: "zdih5L0I880",
      videoUrl: "https://www.youtube.com/watch?v=zdih5L0I880"
    },
    {
      title: "Using GitHub Actions, build, push docker image to docker hub registry for .NET Core Web API | LSC",
      description: null,
      videoId: "1LTwpTi04j4",
      videoUrl: "https://www.youtube.com/watch?v=1LTwpTi04j4"
    },
    {
      title: "Azure App Service: Deploying .NET 7 Web API with Cosmos DB Using Docker Containers | Docker | Azure",
      description: null,
      videoId: "Wt-dM9wSdps",
      videoUrl: "https://www.youtube.com/watch?v=Wt-dM9wSdps"
    },
    {
      title: "Containerized .NET 7 Web API & Web App: Docker Compose for Seamless Integration & Deployment | LSC",
      description: null,
      videoId: "lkbw-m8ZMTM",
      videoUrl: "https://www.youtube.com/watch?v=lkbw-m8ZMTM"
    },
    {
      title: "Azure Cosmos DB Emulator: Local Development Setup, Database & Container, Item Management | Cosmos DB",
      description: null,
      videoId: "8NlCk2_Tl10",
      videoUrl: "https://www.youtube.com/watch?v=8NlCk2_Tl10"
    },
    {
      title: "Mastering Azure Cosmos DB: Provisioning, APIs, Databases, Containers, and Item Creation Tutorial",
      description: null,
      videoId: "kxBafyDy5LQ",
      videoUrl: "https://www.youtube.com/watch?v=kxBafyDy5LQ"
    },
    {
      title: "Developing .Net 7 apps with Docker | Building Docker Images for .NET Core Apps | docker hub | Part 4",
      description: null,
      videoId: "U91yXDS056E",
      videoUrl: "https://www.youtube.com/watch?v=U91yXDS056E"
    },
    {
      title: "Developing .Net 7 apps with Docker | Configuration in Docker based .Net Apps | Docker | Part 3",
      description: null,
      videoId: "CxPYxXoPuMU",
      videoUrl: "https://www.youtube.com/watch?v=CxPYxXoPuMU"
    },
    {
      title: "Developing .Net 7 apps with Docker | Logging with Docker based .Net Apps | Seri log | Part 2",
      description: null,
      videoId: "cpYCr-Rciq8",
      videoUrl: "https://www.youtube.com/watch?v=cpYCr-Rciq8"
    },
    {
      title: "Developing .Net 7 apps with Docker | Getting started with .Net Core Webapi & Docker | Part 1",
      description: null,
      videoId: "INw6nJh9unc",
      videoUrl: "https://www.youtube.com/watch?v=INw6nJh9unc"
    },
    {
      title: "Effortless Key Vault Integration Store Secrets in  NET Core Web API's InMemory Configuration | LSC",
      description: null,
      videoId: "LCBDcQ8dkNk",
      videoUrl: "https://www.youtube.com/watch?v=LCBDcQ8dkNk"
    },
    {
      title: "Securely Retrieve Secrets from Azure Key Vault in .NET Core Web API using ClientId & Secret | LSC",
      description: null,
      videoId: "yeFFpjQwcdQ",
      videoUrl: "https://www.youtube.com/watch?v=yeFFpjQwcdQ"
    },
    {
      title: "Setting Up Azure Application Insights | Configuring in .NET Core Web API | Step-by-Step Guide | LSC",
      description: null,
      videoId: "SmcYJLqBJ7U",
      videoUrl: "https://www.youtube.com/watch?v=SmcYJLqBJ7U"
    },
    {
      title: "Securely Access Azure Blob Storage Containers in C# with SAS Tokens & Generate Download URLs AZ-204",
      description: null,
      videoId: "nFY-pow8MRw",
      videoUrl: "https://www.youtube.com/watch?v=nFY-pow8MRw"
    },
    {
      title: "How to Trigger an Azure Function with BlobTrigger & Input Binding to Process Excel Files | AZ-204",
      description: null,
      videoId: "CW5M0lsQmDk",
      videoUrl: "https://www.youtube.com/watch?v=CW5M0lsQmDk"
    },
    {
      title: "How to Create a Private Azure Storage Container & Upload Files with  NET Core Web API | AZ-204 | LSC",
      description: null,
      videoId: "tPtAiFfcEFM",
      videoUrl: "https://www.youtube.com/watch?v=tPtAiFfcEFM"
    },
    {
      title: "Using Durable Functions for Fan Out Fan In Pattern | Functions | AZ-204 | LSC",
      description: null,
      videoId: "YYMX0JdxV7Q",
      videoUrl: "https://www.youtube.com/watch?v=YYMX0JdxV7Q"
    },
    {
      title: "Getting Started with Azure Durable Functions An Example of Function Chaining | AZ-204 | LSC",
      description: null,
      videoId: "dZsp18GZ16w",
      videoUrl: "https://www.youtube.com/watch?v=dZsp18GZ16w"
    },
    {
      title: "Azure Function: Creating and Deploying HTTP Triggers and Timers to Azure using Visual Studio | LSC",
      description: null,
      videoId: "zBj4sOa2PvU",
      videoUrl: "https://www.youtube.com/watch?v=zBj4sOa2PvU"
    },
    {
      title: "Adding a Spinner to Angular App on Outgoing HTTP Calls",
      description: null,
      videoId: "n0aIRw3bN5c",
      videoUrl: "https://www.youtube.com/watch?v=n0aIRw3bN5c"
    },
    {
      title: ".NET Core Step-by-Step Guide: Configuring Azure AD B2C Authentication for a Web App and Web API",
      description: null,
      videoId: "gxPWRq9BteI",
      videoUrl: "https://www.youtube.com/watch?v=gxPWRq9BteI"
    },
    {
      title: "How to create Custom Message Service Using Toastr | ngx-toastr | Angular | Auto Complete | LSC",
      description: null,
      videoId: "7sQdfhjMESQ",
      videoUrl: "https://www.youtube.com/watch?v=7sQdfhjMESQ"
    },
    {
      title: "Using Local Storage in Angular Applications",
      description: null,
      videoId: "IJoz76PKJ7E",
      videoUrl: "https://www.youtube.com/watch?v=IJoz76PKJ7E"
    },
    {
      title: "How to Show a Warning Message to Users When They Try to Close Your Website",
      description: null,
      videoId: "4Q_ecmyPlj0",
      videoUrl: "https://www.youtube.com/watch?v=4Q_ecmyPlj0"
    },
    {
      title: "Angular Custom Directives A Beginner’s Guide with Real Time Scenario | Directives | Angular | LSC",
      description: null,
      videoId: "pwX5tYt15tU",
      videoUrl: "https://www.youtube.com/watch?v=pwX5tYt15tU"
    },
    {
      title: "How to Use Multiple Angular AuthGuards in canActivate | Angular | Security | LSC",
      description: null,
      videoId: "sNFd1pdVJHI",
      videoUrl: "https://www.youtube.com/watch?v=sNFd1pdVJHI"
    },
    {
      title: "How to Build Custom Preload Strategies in Angular  | Performance | Security | LSC",
      description: null,
      videoId: "e5SiArFpDTw",
      videoUrl: "https://www.youtube.com/watch?v=e5SiArFpDTw"
    },
    {
      title: "How to implement Angular PreloadingStrategy: Boosting App Performance with PreloadAllModules | LSC",
      description: null,
      videoId: "jTaD4226hPc",
      videoUrl: "https://www.youtube.com/watch?v=jTaD4226hPc"
    },
    {
      title: "Understanding the CanLoad Guard in Angular: Real-time Example | Guard | Angular | LSC",
      description: null,
      videoId: "y4GmHjYW8y4",
      videoUrl: "https://www.youtube.com/watch?v=y4GmHjYW8y4"
    },
    {
      title: "Lazy Loading in Angular: Boosting Performance and User Experience",
      description: null,
      videoId: "77bvFBBagbU",
      videoUrl: "https://www.youtube.com/watch?v=77bvFBBagbU"
    },
    {
      title: "Mastering IMemoryCache in .NET Core: How to Boost Your Application's Performance with Caching",
      description: null,
      videoId: "DPpQUuEFo60",
      videoUrl: "https://www.youtube.com/watch?v=DPpQUuEFo60"
    },
    {
      title: "Uploading Files and Model Data with Angular and .NET Core Web API to Single Endpoint | LSC",
      description: null,
      videoId: "e0jATEABbXo",
      videoUrl: "https://www.youtube.com/watch?v=e0jATEABbXo"
    },
    {
      title: "Uploading Files and Model data in one API call using FromForm Attribute in .NET Core Web API | LSC",
      description: null,
      videoId: "9QW8MdwSLDk",
      videoUrl: "https://www.youtube.com/watch?v=9QW8MdwSLDk"
    },
    {
      title: "Building a Scalable Web API with CQRS Pattern using .NET Core 6 | Planner App | Web API | LSC",
      description: null,
      videoId: "RoteIS7Wpx8",
      videoUrl: "https://www.youtube.com/watch?v=RoteIS7Wpx8"
    },
    {
      title: "Building a Planner App with Angular 14, Azure AD B2C Authentication, and .NET Core Web API | LSC",
      description: null,
      videoId: "9R1JGMI7dvw",
      videoUrl: "https://www.youtube.com/watch?v=9R1JGMI7dvw"
    },
    {
      title: "Exploring the Power of ChatGPT API in .NET Core 6 Web API Development | ChatGTP | OpenAI.API | LSC",
      description: null,
      videoId: "tEdwLpXVB_0",
      videoUrl: "https://www.youtube.com/watch?v=tEdwLpXVB_0"
    },
    {
      title: "Planner App demo powered by DOTNET Core 6 using CQRS and Angular 15 | Demo App | .NET Core | Angular",
      description: null,
      videoId: "kUyS4MYe5yE",
      videoUrl: "https://www.youtube.com/watch?v=kUyS4MYe5yE"
    },
    {
      title: "How to build background tasks with hosted services in ASP NET Core | DOTNET CORE",
      description: null,
      videoId: "8OyI_tGQKfU",
      videoUrl: "https://www.youtube.com/watch?v=8OyI_tGQKfU"
    },
    {
      title: "Boost Your Website's Performance with Azure CDN: A Step-by-Step Guide | AZ-204 | CDN | LSC",
      description: null,
      videoId: "0h__Dv2DtUg",
      videoUrl: "https://www.youtube.com/watch?v=0h__Dv2DtUg"
    },
    {
      title: "Azure Redis Cache: How to Improve Web API Performance in Easy Steps | Redis | AZ-204 | Azure | LSC",
      description: null,
      videoId: "TFn9F2Fg0zg",
      videoUrl: "https://www.youtube.com/watch?v=TFn9F2Fg0zg"
    },
    {
      title: "How to chain and wait for multiple API calls in Angular: A Step-by-Step Guide | Angular | LSC",
      description: null,
      videoId: "CcdyJJolM-Y",
      videoUrl: "https://www.youtube.com/watch?v=CcdyJJolM-Y"
    },
    {
      title: "Handling API Exceptions and Global Errors in Angular: A Comprehensive Guide | Angular | LSC",
      description: null,
      videoId: "04JJzKkJxvw",
      videoUrl: "https://www.youtube.com/watch?v=04JJzKkJxvw"
    },
    {
      title: "Global Error Handling in .NET Core Web API: A Practical Guide | DOTNET CORE | WEB API | Error | LSC",
      description: null,
      videoId: "_-9X8pqxOIo",
      videoUrl: "https://www.youtube.com/watch?v=_-9X8pqxOIo"
    },
    {
      title: "Creating a .NET Core Web API and Database Design from Scratch using ChatGPT | OpenAI | LSC",
      description: null,
      videoId: "MpqOP-TajaU",
      videoUrl: "https://www.youtube.com/watch?v=MpqOP-TajaU"
    },
    {
      title: "How to Customize UI with HTML in Azure AD B2C | Azure | LSC",
      description: null,
      videoId: "Bs3GjMXZnE0",
      videoUrl: "https://www.youtube.com/watch?v=Bs3GjMXZnE0"
    },
    {
      title: "Building a Chatbot in Angular with ChatGPT: Step-by-Step Tutorial | ChatGPT | Angular | LSC",
      description: null,
      videoId: "JlK8l_lvBko",
      videoUrl: "https://www.youtube.com/watch?v=JlK8l_lvBko"
    },
    {
      title: "Build ChatGPT powered AI app in Angular  | ChatGPT Crash Course | ChapGPT | Angular | LSC",
      description: null,
      videoId: "-Ode2RQb4yU",
      videoUrl: "https://www.youtube.com/watch?v=-Ode2RQb4yU"
    },
    {
      title: "Securing Your Web API with Azure AD B2C JWT Validation Policy: A Step-by-Step Guide | Azure | LSC",
      description: null,
      videoId: "nrel_Zm_lWk",
      videoUrl: "https://www.youtube.com/watch?v=nrel_Zm_lWk"
    },
    {
      title: "How to fix Angular route path not working for direct URL when deployed to production | Angular | LSC",
      description: null,
      videoId: "W1wCtjI6NQU",
      videoUrl: "https://www.youtube.com/watch?v=W1wCtjI6NQU"
    },
    {
      title: "Implement caching policy in the Azure API Management Part 7 | Demo | Azure | AZ-204 | LSC",
      description: null,
      videoId: "EfgZmA-AKlw",
      videoUrl: "https://www.youtube.com/watch?v=EfgZmA-AKlw"
    },
    {
      title: "Implementing throttling in Azure API Management Part 6 | Demo | Azure | AZ-204 | LSC",
      description: null,
      videoId: "OgLQk1Yew0M",
      videoUrl: "https://www.youtube.com/watch?v=OgLQk1Yew0M"
    },
    {
      title: "Protect API from unauthorized with API key and client certificates in API Management | Part 5 | Demo",
      description: null,
      videoId: "JtjbnmgusOU",
      videoUrl: "https://www.youtube.com/watch?v=JtjbnmgusOU"
    },
    {
      title: "Concepts of Azure API Management Securities and Policies Part 4 | AZ-204 | Azure | LSC",
      description: null,
      videoId: "wCthAi353bE",
      videoUrl: "https://www.youtube.com/watch?v=wCthAi353bE"
    },
    {
      title: "Master Azure API Management: Full Course on Managing and Securing APIs in the Cloud | AZ-204 |  LSC",
      description: null,
      videoId: "Kn7NRH9h_ug",
      videoUrl: "https://www.youtube.com/watch?v=Kn7NRH9h_ug"
    },
    {
      title: "How to set up access for developers in Azure API Management Part 3 | Demo | AZ-204 | Azure | LSC",
      description: null,
      videoId: "DNFOFJsv1yQ",
      videoUrl: "https://www.youtube.com/watch?v=DNFOFJsv1yQ"
    },
    {
      title: "How to set up Azure API Management Service in Azure portal Part 2 | Azure | | Demo | LSC",
      description: null,
      videoId: "iZTETR99FrM",
      videoUrl: "https://www.youtube.com/watch?v=iZTETR99FrM"
    },
    {
      title: "Azure API Management Part 1 | Explore API Gateway Structure | AZ-204 | Azure | LSC",
      description: null,
      videoId: "H-tUZLdfRP4",
      videoUrl: "https://www.youtube.com/watch?v=H-tUZLdfRP4"
    },
    {
      title: "Building .NET Core Apps with Microsoft Graph API: A Step-by-Step Guide Using dotnet SDK | AZ-204",
      description: null,
      videoId: "VuHMc_h6nvo",
      videoUrl: "https://www.youtube.com/watch?v=VuHMc_h6nvo"
    },
    {
      title: "Exploring Microsoft Graphs Made Easy: A Beginner's Guide to Using Graph Explorer | AZ-204 | LSC",
      description: null,
      videoId: "u5a2UUmJKu0",
      videoUrl: "https://www.youtube.com/watch?v=u5a2UUmJKu0"
    },
    {
      title: "How to generate a self-signed SSL certificate in windows11 using power shell command & export | LSC",
      description: null,
      videoId: "R7evZIabMwk",
      videoUrl: "https://www.youtube.com/watch?v=R7evZIabMwk"
    },
    {
      title: "How to access keys & certificates from azure key vault using DOTNET SDK | AZ-204 | Azure | LSC",
      description: null,
      videoId: "fKfd1n1HBMM",
      videoUrl: "https://www.youtube.com/watch?v=fKfd1n1HBMM"
    },
    {
      title: "How to enable soft delete and purge protection in AZURE Key Vault | AZ-204 | Key Vault | Azure | LSC",
      description: null,
      videoId: "Gl-JMywVetc",
      videoUrl: "https://www.youtube.com/watch?v=Gl-JMywVetc"
    },
    {
      title: "How to setup pre-deployment approval in Azure DevOps Release Pipeline | DevOps | CICD pipeline | LSC",
      description: null,
      videoId: "EtngiASuTrY",
      videoUrl: "https://www.youtube.com/watch?v=EtngiASuTrY"
    },
    {
      title: "How to set up CI/CD pipeline for .NET Core App in Azure DevOps using GIT repo | Azure | DevOps | LSC",
      description: null,
      videoId: "fREZnLsWsBc",
      videoUrl: "https://www.youtube.com/watch?v=fREZnLsWsBc"
    },
    {
      title: "Managing Azure AD B2C Users with Graph API: A Step-by-Step Tutorial | Azure | AZ-204 | LSC",
      description: null,
      videoId: "lfs72Fhqa1s",
      videoUrl: "https://www.youtube.com/watch?v=lfs72Fhqa1s"
    },
    {
      title: "How to secure and access DB Connection Strings in .NET Core with Azure Key Vault Secrets | LSC",
      description: null,
      videoId: "kirQP5I7Iec",
      videoUrl: "https://www.youtube.com/watch?v=kirQP5I7Iec"
    },
    {
      title: "Retrieving Secrets from Azure Key Vault in .NET Core: A Step-by-Step Guide | Azure | AZ-204 | LSC",
      description: null,
      videoId: "hEw_Vi21jWM",
      videoUrl: "https://www.youtube.com/watch?v=hEw_Vi21jWM"
    },
    {
      title: "Configure authentication in Angular and WEB API by using Azure Active Directory B2C | LSC",
      description: null,
      videoId: "vEwLQYgQvGI",
      videoUrl: "https://www.youtube.com/watch?v=vEwLQYgQvGI"
    },
    {
      title: "Configure authentication in Angular and WEB API by using Azure Active Directory B2C | Part 6 | LSC",
      description: null,
      videoId: "_RIDuMFHvIs",
      videoUrl: "https://www.youtube.com/watch?v=_RIDuMFHvIs"
    },
    {
      title: "Dynamic CSS in Angular: Using Class Bindings and ngClass Directive | LSC",
      description: null,
      videoId: "uJmOV8Y0GuA",
      videoUrl: "https://www.youtube.com/watch?v=uJmOV8Y0GuA"
    },
    {
      title: "Dynamic Styles in Angular: Using Style Bindings and ngStyle Directive | LSC",
      description: null,
      videoId: "1KBfdmfPbw0",
      videoUrl: "https://www.youtube.com/watch?v=1KBfdmfPbw0"
    },
    {
      title: "Mastering ngSwitch Directive in Angular: A Complete Tutorial | Angular | LSC",
      description: null,
      videoId: "Y1IhacxDVx8",
      videoUrl: "https://www.youtube.com/watch?v=Y1IhacxDVx8"
    },
    {
      title: "Effective Conditional Rendering in Angular: Using *ngIf and hidden Attributes | Angular | LSC",
      description: null,
      videoId: "yGIvmN1nXdw",
      videoUrl: "https://www.youtube.com/watch?v=yGIvmN1nXdw"
    },
    {
      title: "Dynamic Form Building in Angular Reactive Forms - How to Add and Remove Form Fields | Angular | LSC",
      description: null,
      videoId: "d5MOWbJBFCk",
      videoUrl: "https://www.youtube.com/watch?v=d5MOWbJBFCk"
    },
    {
      title: "Set up sign-up and sign-in with a Google account using Azure Active Directory B2C | Angular | LSC",
      description: null,
      videoId: "9_p7Xr1pxls",
      videoUrl: "https://www.youtube.com/watch?v=9_p7Xr1pxls"
    },
    {
      title: "Configure authentication in Angular and WEB API by using Azure Active Directory B2C | Part 5 | LSC",
      description: null,
      videoId: "oUXXRhpIw2w",
      videoUrl: "https://www.youtube.com/watch?v=oUXXRhpIw2w"
    },
    {
      title: "Configure authentication in Angular and WEB API by using Azure Active Directory B2C | Part 4 | LSC",
      description: null,
      videoId: "fdYqaEAXiEM",
      videoUrl: "https://www.youtube.com/watch?v=fdYqaEAXiEM"
    },
    {
      title: "Configure authentication in Angular and WEB API by using Azure Active Directory B2C | Part 3 | LSC",
      description: null,
      videoId: "saQQcR1PATk",
      videoUrl: "https://www.youtube.com/watch?v=saQQcR1PATk"
    },
    {
      title: "Configure authentication in Angular and WEB API by using Azure Active Directory B2C | Part 2 | LSC",
      description: null,
      videoId: "o5gKCAir2vU",
      videoUrl: "https://www.youtube.com/watch?v=o5gKCAir2vU"
    },
    {
      title: "Configure authentication in Angular and WEB API by using Azure Active Directory B2C | Part 1 | LSC",
      description: null,
      videoId: "Y44VMVwRUWs",
      videoUrl: "https://www.youtube.com/watch?v=Y44VMVwRUWs"
    },
    {
      title: "Configure authentication in Angular and WEB API by using Azure Active Directory B2C | Demo | LSC",
      description: null,
      videoId: "06ZBbKZgs1g",
      videoUrl: "https://www.youtube.com/watch?v=06ZBbKZgs1g"
    },
    {
      title: "Angular 13 Reactive forms with real-time WEB API | CRUD Operation | Angular 13 | Learn Smart Coding",
      description: null,
      videoId: "5vnWjjKpPW8",
      videoUrl: "https://www.youtube.com/watch?v=5vnWjjKpPW8"
    },
    {
      title: "Angular 13 Full Course for Beginners | Shopping App | Angular | Learn Smart Coding",
      description: null,
      videoId: "gbtlCsznXBU",
      videoUrl: "https://www.youtube.com/watch?v=gbtlCsznXBU"
    },
    {
      title: "DOTNET CORE Web API using Generic Repository pattern | LSC",
      description: null,
      videoId: "pb218L_-0pk",
      videoUrl: "https://www.youtube.com/watch?v=pb218L_-0pk"
    },
    {
      title: "How to configure the connection strings in Azure WEB APP for DOTNET CORE WEB API | Azure | LSC",
      description: null,
      videoId: "gYbb_TYLSes",
      videoUrl: "https://www.youtube.com/watch?v=gYbb_TYLSes"
    },
    {
      title: "How to configure Application Insights in Azure and DOTNET CORE WEB API | Azure | Learn Smart Coding",
      description: null,
      videoId: "NWcrAANisvk",
      videoUrl: "https://www.youtube.com/watch?v=NWcrAANisvk"
    },
    {
      title: "ASP.NET CORE WEB API Complete course | EF CORE | CRUD | Shopping App | Tutorial for Beginners | LSC",
      description: null,
      videoId: "LgD_II5-9eI",
      videoUrl: "https://www.youtube.com/watch?v=LgD_II5-9eI"
    },
    {
      title: "How to use Async and Await in C# | Interview Tips | Asynchronous Programming | Learn Smart Coding",
      description: null,
      videoId: "aEnhcdKlS1U",
      videoUrl: "https://www.youtube.com/watch?v=aEnhcdKlS1U"
    },
    {
      title: "How to pass parameters to function arguments using (...) spread operator | JavaScript | ES6 | LSC",
      description: null,
      videoId: "0uvjBo9mevo",
      videoUrl: "https://www.youtube.com/watch?v=0uvjBo9mevo"
    },
    {
      title: "How to concatenate more than one array using (...) spread operator | JavaScript | ES6 | LSC",
      description: null,
      videoId: "HMUqfPoforw",
      videoUrl: "https://www.youtube.com/watch?v=HMUqfPoforw"
    },
    {
      title: "How to shallow an object literal using (...) spread operator | JavaScript | ES6 | Learn Smart Coding",
      description: null,
      videoId: "5Y4WUj27LV0",
      videoUrl: "https://www.youtube.com/watch?v=5Y4WUj27LV0"
    },
    {
      title: "How to copy an array of objects using (...) spread operator | JavaScript | ES6 | Learn Smart Coding",
      description: null,
      videoId: "-PyMxmDnurg",
      videoUrl: "https://www.youtube.com/watch?v=-PyMxmDnurg"
    },
    {
      title: "How to copy an array of primitive type using (...) spread operator | JavaScript | ES6 | LSC",
      description: null,
      videoId: "S1MTKGkweYA",
      videoUrl: "https://www.youtube.com/watch?v=S1MTKGkweYA"
    },
    {
      title: "How to copy a string to an array using (...) spread operator | JavaScript | ES6 | Learn Smart Coding",
      description: null,
      videoId: "d7qw_mBNXTs",
      videoUrl: "https://www.youtube.com/watch?v=d7qw_mBNXTs"
    },
    {
      title: "Angular 13 Tutorial : Shopping App Demo | Angular | Learn Smart Coding",
      description: null,
      videoId: "rgnXDDvoGV0",
      videoUrl: "https://www.youtube.com/watch?v=rgnXDDvoGV0"
    },
    {
      title: "How to deploy Angular app to Azure app service using CI/CD pipeline from GIT repo | Angular | LSC",
      description: null,
      videoId: "24w65VnlrOU",
      videoUrl: "https://www.youtube.com/watch?v=24w65VnlrOU"
    },
    {
      title: "Angular CRUD Reactive forms with real-time WEB API | Angular 13 | Learn Smart Coding",
      description: null,
      videoId: "qOf9-lr0qw0",
      videoUrl: "https://www.youtube.com/watch?v=qOf9-lr0qw0"
    },
    {
      title: "GIT Tutorial for Beginners:  GIT basic commands with real-time examples | Learn Smart Coding",
      description: null,
      videoId: "Xohwrcr7AKQ",
      videoUrl: "https://www.youtube.com/watch?v=Xohwrcr7AKQ"
    },
    {
      title: "How to wait for an API call in canActivate auth guard in angular | Angular | Learn Smart Coding",
      description: null,
      videoId: "Tvu5HOjb59U",
      videoUrl: "https://www.youtube.com/watch?v=Tvu5HOjb59U"
    },
    {
      title: "How to prevent users from navigating away from a component using canDeactivate guard | Angular | LSC",
      description: null,
      videoId: "WDpK5k8Bc2A",
      videoUrl: "https://www.youtube.com/watch?v=WDpK5k8Bc2A"
    },
    {
      title: "How to set page title dynamically in Angular  | Angular | Learn Smart Coding",
      description: null,
      videoId: "PAodQqiO59w",
      videoUrl: "https://www.youtube.com/watch?v=PAodQqiO59w"
    },
    {
      title: "Angular Reactive forms Custom Validators & Custom Validation messages | Angular | Learn Smart Coding",
      description: null,
      videoId: "NIvAGv-oQ-w",
      videoUrl: "https://www.youtube.com/watch?v=NIvAGv-oQ-w"
    },
    {
      title: "How to upload files using Angular to DOTNET Core Web API using Reactive Forms | Learn Smart coding",
      description: null,
      videoId: "6A-aYX355cg",
      videoUrl: "https://www.youtube.com/watch?v=6A-aYX355cg"
    },
    {
      title: "How to handle exceptions in Angular HTTP Service | Angular for Beginners | Learn Smart Coding",
      description: null,
      videoId: "e-NNM02Y9To",
      videoUrl: "https://www.youtube.com/watch?v=e-NNM02Y9To"
    },
    {
      title: "AZ-204 | How to set access tiers for Azure Storage Accounts and Block Blobs | Learn Smart Coding",
      description: null,
      videoId: "lwBPeeBwRd4",
      videoUrl: "https://www.youtube.com/watch?v=lwBPeeBwRd4"
    },
    {
      title: "How to protect routes with Angular Auth Guards | canActivate guard | Angular | Learn Smart Coding",
      description: null,
      videoId: "QfVwb9qUOg0",
      videoUrl: "https://www.youtube.com/watch?v=QfVwb9qUOg0"
    },
    {
      title: "How to pass parameters to a route and navigate to a route using code | Angular | Learn Smart Coding",
      description: null,
      videoId: "An5_HX4aics",
      videoUrl: "https://www.youtube.com/watch?v=An5_HX4aics"
    },
    {
      title: "AZ-204 | Setting and Retrieving Properties and Metadata | Blob Storage | Learn Smart Coding",
      description: null,
      videoId: "CrMZ_LubWL0",
      videoUrl: "https://www.youtube.com/watch?v=CrMZ_LubWL0"
    },
    {
      title: "AZ-204 | Interacting with Data Using the Azure SDK for .NET | Blob Storage | Learn Smart Coding",
      description: null,
      videoId: "MEmHi6NzFhE",
      videoUrl: "https://www.youtube.com/watch?v=MEmHi6NzFhE"
    },
    {
      title: "AZ-204 | Develop Solutions with Blob Storage | Storage Accounts | Azure | Learn Smart Coding",
      description: null,
      videoId: "-xYEOIBFroI",
      videoUrl: "https://www.youtube.com/watch?v=-xYEOIBFroI"
    },
    {
      title: "How to define and read query parameters in Angular | Angular | Learn Smart Coding",
      description: null,
      videoId: "jyGONf58Oks",
      videoUrl: "https://www.youtube.com/watch?v=jyGONf58Oks"
    },
    {
      title: "How to build Custom Pipes and use In-built pipes in Angular | Angular | Learn Smart Coding",
      description: null,
      videoId: "mIn08XD1_78",
      videoUrl: "https://www.youtube.com/watch?v=mIn08XD1_78"
    },
    {
      title: "How to implement Route Resolver in Angular | Angular | Interview Topic | Learn Smart Coding",
      description: null,
      videoId: "ZTZJpbCPWrg",
      videoUrl: "https://www.youtube.com/watch?v=ZTZJpbCPWrg"
    },
    {
      title: "How to apply animation in Angular | Animating Route Transitions | Animations | Learn Smart Coding",
      description: null,
      videoId: "G9zAdwy3Skk",
      videoUrl: "https://www.youtube.com/watch?v=G9zAdwy3Skk"
    },
    {
      title: "How to log HTTP Request & Response in Azure App Insights using DOTNET CORE | Learn Smart Coding",
      description: null,
      videoId: "0aJwxbDp0-Q",
      videoUrl: "https://www.youtube.com/watch?v=0aJwxbDp0-Q"
    },
    {
      title: "AZ-204 | Azure App Service Web Apps | Deploy code to web app using GITHUB | Learn Smart Coding",
      description: null,
      videoId: "TwcX28gFSU8",
      videoUrl: "https://www.youtube.com/watch?v=TwcX28gFSU8"
    },
    {
      title: "AZ 204 Enabling diagnostic logging",
      description: null,
      videoId: "uFqrxHRFDB0",
      videoUrl: "https://www.youtube.com/watch?v=uFqrxHRFDB0"
    },
    {
      title: "AZ-204 | Azure App Service Web Apps | Configure custom domain and SSL binding | Learn Smart Coding",
      description: null,
      videoId: "r0jXgGKinC0",
      videoUrl: "https://www.youtube.com/watch?v=r0jXgGKinC0"
    },
    {
      title: "AZ-204 | Azure App Service Web Apps | Configuring database connection string | Learn Smart Coding",
      description: null,
      videoId: "vQZAUhTHPOE",
      videoUrl: "https://www.youtube.com/watch?v=vQZAUhTHPOE"
    },
    {
      title: "AZ-204 | Azure App Service Web Apps | Implementing Auto Scaling in App Service | Learn Smart Coding",
      description: null,
      videoId: "Gw7yZbcmoE0",
      videoUrl: "https://www.youtube.com/watch?v=Gw7yZbcmoE0"
    },
    {
      title: "AZ-204 | Azure App Service Web Apps | Scaling App Service on a schedule | Learn Smart Coding",
      description: null,
      videoId: "SWwsehQs4MI",
      videoUrl: "https://www.youtube.com/watch?v=SWwsehQs4MI"
    },
    {
      title: "AZ-204 | Azure App Service Web Apps | Manually Scale App Service | Learn Smart Coding",
      description: null,
      videoId: "Qf4nanIEFE0",
      videoUrl: "https://www.youtube.com/watch?v=Qf4nanIEFE0"
    },
    {
      title: "AZ-204 | Azure App Service Web Apps | Securing a web app with SSL Certificate | Learn Smart Coding",
      description: null,
      videoId: "bhBn2-DI7w0",
      videoUrl: "https://www.youtube.com/watch?v=bhBn2-DI7w0"
    },
    {
      title: "AZ-204 | Azure App Service Web Apps | Create Web App using Azure AR Template | Learn Smart Coding",
      description: null,
      videoId: "32b5SC00u2A",
      videoUrl: "https://www.youtube.com/watch?v=32b5SC00u2A"
    },
    {
      title: "AZ-204 | Azure App Service Web Apps | Create Web App with Powershell | Learn Smart Coding",
      description: null,
      videoId: "jxs3lNoQT8A",
      videoUrl: "https://www.youtube.com/watch?v=jxs3lNoQT8A"
    },
    {
      title: "AZ-204 | Azure App Service Web Apps | Create Web App with Azure CLI | Learn Smart Coding",
      description: null,
      videoId: "K10e67FT4OA",
      videoUrl: "https://www.youtube.com/watch?v=K10e67FT4OA"
    },
    {
      title: "AZ-204 | Azure App Service Web Apps | Create Web App in Azure Portal | Learn Smart Coding",
      description: null,
      videoId: "0czq54ucAPs",
      videoUrl: "https://www.youtube.com/watch?v=0czq54ucAPs"
    },
    {
      title: "AZ-204 | Azure App Service Web Apps | Understanding of App Service Plan & ASE | Learn Smart Coding",
      description: null,
      videoId: "fro8GD9AjP8",
      videoUrl: "https://www.youtube.com/watch?v=fro8GD9AjP8"
    },
    {
      title: "Mastering Default Parameters in JavaScript (ES6) | JavaScript Tutorial #es6 #javascript",
      description: null,
      videoId: "o38boqzQ5HI",
      videoUrl: "https://www.youtube.com/watch?v=o38boqzQ5HI"
    },
    {
      title: "How to use Destructuring assignment in JavaScript | ES6 | JavaScript | Learn Smart Coding examples",
      description: null,
      videoId: "PxBkoFp2Fe4",
      videoUrl: "https://www.youtube.com/watch?v=PxBkoFp2Fe4"
    },
    {
      title: "How to use Template literals in JavaScript | ES6 | JavaScript | Learn Smart Coding",
      description: null,
      videoId: "Uphr9X8FDiE",
      videoUrl: "https://www.youtube.com/watch?v=Uphr9X8FDiE"
    },
    {
      title: "Mastering the JavaScript Spread Operator in ES6 #javascript #es6",
      description: null,
      videoId: "SQAb1YyrLi4",
      videoUrl: "https://www.youtube.com/watch?v=SQAb1YyrLi4"
    },
    {
      title: "Understanding let, var, and const Keywords in JavaScript (ES6) | JavaScript Tutorial",
      description: null,
      videoId: "gheLbmWTVus",
      videoUrl: "https://www.youtube.com/watch?v=gheLbmWTVus"
    },
    {
      title: "How to use Rest Parameters in JavaScript | ES6 | JavaScript | Learn Smart Coding",
      description: null,
      videoId: "_6UtGVnNX0U",
      videoUrl: "https://www.youtube.com/watch?v=_6UtGVnNX0U"
    },
    {
      title: "Angular 13 for Beginners | Angular FULL Course | Learn Smart Coding",
      description: null,
      videoId: "fOIPdAYUsk0",
      videoUrl: "https://www.youtube.com/watch?v=fOIPdAYUsk0"
    },
    {
      title: "Angular Getting Started | How to apply Routing  in application | Part 10 | Learn Smart Coding",
      description: null,
      videoId: "kZY0sMJTpEo",
      videoUrl: "https://www.youtube.com/watch?v=kZY0sMJTpEo"
    },
    {
      title: "Angular Getting Started | Data Bindings Examples | Part 5 | Learn Smart Coding",
      description: null,
      videoId: "JBAmDYVbCVU",
      videoUrl: "https://www.youtube.com/watch?v=JBAmDYVbCVU"
    },
    {
      title: "Angular Getting Started | How to use Input() & Output() to pass data | Part 9 | Learn Smart Coding",
      description: null,
      videoId: "GLYSgti0CPU",
      videoUrl: "https://www.youtube.com/watch?v=GLYSgti0CPU"
    },
    {
      title: "Angular Getting Started | HTTP Service using real time WEB API | Part 8 | Learn Smart Coding",
      description: null,
      videoId: "L7d1i_4RdaU",
      videoUrl: "https://www.youtube.com/watch?v=L7d1i_4RdaU"
    },
    {
      title: "Angular Getting Started | Data Bindings usage in Components | Part 6 | Learn Smart Coding",
      description: null,
      videoId: "A75MCRN02Mw",
      videoUrl: "https://www.youtube.com/watch?v=A75MCRN02Mw"
    },
    {
      title: "Angular Getting Started | Lifecycle hooks | Part 7 | Learn Smart Coding",
      description: null,
      videoId: "3u9gmq6o4SM",
      videoUrl: "https://www.youtube.com/watch?v=3u9gmq6o4SM"
    },
    {
      title: "Angular Getting Started | Data Bindings | In-Built Directives Examples | Part 5 | Learn Smart Coding",
      description: null,
      videoId: "FsrCIvAF1Nc",
      videoUrl: "https://www.youtube.com/watch?v=FsrCIvAF1Nc"
    },
    {
      title: "Angular Getting Started | Create Components using CLI | Part 4 | Learn Smart Coding",
      description: null,
      videoId: "CW9a8J0TexE",
      videoUrl: "https://www.youtube.com/watch?v=CW9a8J0TexE"
    },
    {
      title: "Angular Getting Started | Introduction | App structure explanation | Part 3 | Learn Smart Coding",
      description: null,
      videoId: "GbAv3hCZZ1E",
      videoUrl: "https://www.youtube.com/watch?v=GbAv3hCZZ1E"
    },
    {
      title: "Entity Framework Core commands explained with examples | DOTNET CORE | Learn Smart Coding",
      description: null,
      videoId: "3okWEZfGF6w",
      videoUrl: "https://www.youtube.com/watch?v=3okWEZfGF6w"
    },
    {
      title: "Angular Getting Started | Software Installation and App Setup | Part 2 | Learn Smart Coding",
      description: null,
      videoId: "Fu2KvkVKgS0",
      videoUrl: "https://www.youtube.com/watch?v=Fu2KvkVKgS0"
    },
    {
      title: "Angular Getting Started | Demo Application Introduction | Part 1 | Learn Smart Coding",
      description: null,
      videoId: "PsvMtvqmAWg",
      videoUrl: "https://www.youtube.com/watch?v=PsvMtvqmAWg"
    },
    {
      title: "How to implement time-based caching using HTTP Interceptor in Angular | Learn Smart Coding | Angular",
      description: null,
      videoId: "G4B8LrAK3dw",
      videoUrl: "https://www.youtube.com/watch?v=G4B8LrAK3dw"
    },
    {
      title: "Configure Azure SQL Server and Database and access from local development machine | Add Client IP",
      description: null,
      videoId: "Mx4eD1M-sOw",
      videoUrl: "https://www.youtube.com/watch?v=Mx4eD1M-sOw"
    },
    {
      title: "AZ-204 | Provision virtual machines using PowerShell | Implement IaaS solutions | Part 3",
      description: null,
      videoId: "3ncV8e2AFSk",
      videoUrl: "https://www.youtube.com/watch?v=3ncV8e2AFSk"
    },
    {
      title: "AZ-204 | Provision virtual machines using Azure CLI | Implement IaaS solutions | Part 2",
      description: null,
      videoId: "11seR1WS19U",
      videoUrl: "https://www.youtube.com/watch?v=11seR1WS19U"
    },
    {
      title: "AZ-204 | Provision virtual machines using the Azure portal | Implement IaaS solutions | Part 1",
      description: null,
      videoId: "-_5Wt9O_aqk",
      videoUrl: "https://www.youtube.com/watch?v=-_5Wt9O_aqk"
    },
    {
      title: "How to Enable/Disable TLS 1.0, 1.1, and 1.2 in Windows Server using IISCrypto tool",
      description: null,
      videoId: "wraOf77onL0",
      videoUrl: "https://www.youtube.com/watch?v=wraOf77onL0"
    },
    {
      title: "How to solve Http Error 500.19 Internal Server Error for DOTNET Core application",
      description: null,
      videoId: "ZCjvZn4iU-U",
      videoUrl: "https://www.youtube.com/watch?v=ZCjvZn4iU-U"
    },
    {
      title: "How to upload a file using DOTNET CORE | Karthik | Everyone can code ! | Learn Smart Coding",
      description: null,
      videoId: "tqjGuKEhK38",
      videoUrl: "https://www.youtube.com/watch?v=tqjGuKEhK38"
    }
  ];
  }
