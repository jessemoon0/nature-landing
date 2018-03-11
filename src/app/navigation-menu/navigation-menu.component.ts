import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {

  listItems: Array<string> = ['About Natous', 'Your Benefits', 'Popular Tours', 'Stories', 'Book Now'];

}
