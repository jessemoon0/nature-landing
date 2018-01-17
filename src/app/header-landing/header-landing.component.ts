import { Component } from '@angular/core';

import { animateMainHeader, animateSubHeader } from './header-landing.animations';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header-landing.component.html',
  styleUrls: ['./header-landing.component.scss'],
  animations: [animateMainHeader, animateSubHeader]
})
export class HeaderLandingComponent {

}
