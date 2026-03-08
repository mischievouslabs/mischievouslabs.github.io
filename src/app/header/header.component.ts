import { Component, Input, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header" [class.transparent]="transparent" [class.scrolled]="scrolled()">
      <nav class="nav" aria-label="Main navigation">
        <a routerLink="/" class="brand" [class.hidden]="transparent && !scrolled()">
          <img src="mascot-no-outline.svg" alt="Mischievous Labs - Home" class="logo" />
        </a>
        <button
          class="mobile-toggle"
          (click)="toggleMenu()"
          [attr.aria-expanded]="menuOpen()"
          aria-label="Open navigation menu"
        >
          <span class="hamburger" [class.open]="menuOpen()">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <ul class="links" [class.mobile-open]="menuOpen()" role="list">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a></li>
          <li><a href="https://www.fab.com/sellers/Mischievous%20Labs" target="_blank" rel="noopener noreferrer" aria-label="Products (opens in new tab)" (click)="closeMenu()">Products</a></li>
          <li><a routerLink="/support" routerLinkActive="active" (click)="closeMenu()">Support</a></li>
        </ul>
      </nav>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() transparent = false;

  scrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    if (this.transparent) {
      this.scrolled.set(window.scrollY > 80);
    }
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    if (this.menuOpen()) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
