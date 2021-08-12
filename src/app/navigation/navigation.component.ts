import {Component, HostBinding, Input} from '@angular/core';
import {UDrawerComponent} from '@nelnet/unifi-components-angular/lib/drawer/drawer.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @Input('drawer')
  drawer!: UDrawerComponent;

  @HostBinding('class')
  get hostClasses() {
    const hostClasses = {
      'full-width': true
    };
    return hostClasses;
  }

  navLinks = [
    { route: '/', title: 'Home' },
    { route: 'adopt', title: 'Adopt'},
    { route: 'apply', title: 'Apply to Adopt'},
    { route: 'faq', title: 'FAQs'},
    { route: 'about', title: 'About'},
    { route: 'contact', title: 'Contact Us'}
  ];

  closeMenu() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }
}
