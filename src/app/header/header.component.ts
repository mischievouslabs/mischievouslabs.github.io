import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header class="header">
      <nav class="nav">
        <a routerLink="/" class="brand">
          <img src="logo.svg" alt="Mischievous Labs" class="logo" />
        </a>
        <ul class="links">
          <li><a routerLink="/">Home</a></li>
          <li><a href="https://www.fab.com/sellers/Mischievous%20Labs" target="_blank" rel="noopener noreferrer">Products</a></li>
          <li><a routerLink="/support">Support</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: `
    :host {
      display: block;
      width: 100vw;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }

    .header {
      background: #2b2c37;
      border-bottom: 1px solid #3f4050;
    }

    .nav {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 2rem;
    }

    .brand {
      display: flex;
      align-items: center;
    }

    .logo {
      height: 40px;
      width: auto;
    }

    .links {
      display: flex;
      list-style: none;
      gap: 2rem;

      a {
        color: #d1d5db;
        text-decoration: none;
        font-size: 0.95rem;
        transition: color 0.2s;

        &:hover {
          color: #60a5fa;
        }
      }
    }
  `
})
export class HeaderComponent {}
