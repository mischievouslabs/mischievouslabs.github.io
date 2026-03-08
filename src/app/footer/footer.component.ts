import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <p>2024-{{ currentYear }} &copy; Mischievous Labs. All experiments approved even if our ethics aren't.</p>
    </footer>
  `,
  styles: `
    :host {
      display: block;
      width: 100vw;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }

    .footer {
      width: 100%;
      text-align: center;
      padding: 1.5rem;
      background: #2b2c37;
      color: #d1d5db;
    }
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
