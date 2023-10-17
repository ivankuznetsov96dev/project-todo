import { Component } from '@angular/core';
import { NavLinksConstant } from './shared/constants/nav-links.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navLinks = NavLinksConstant;
}
