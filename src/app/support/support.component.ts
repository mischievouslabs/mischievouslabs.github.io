import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-support',
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent {}
