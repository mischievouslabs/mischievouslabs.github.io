import { Routes } from '@angular/router';
import { markdownPageRoutes } from 'ngx-markdown-pages';

import { SupportComponent } from './support.component';

export const supportRoutes: Routes = [
  { path: '', component: SupportComponent },
  ...markdownPageRoutes([
    { path: 'live-compile-remote', markdownFile: 'assets/docs/support/live-compile-remote.md' },
    { path: 'simple-radial-menu', markdownFile: 'assets/docs/support/simple-radial-menu.md' },
  ]),
];
