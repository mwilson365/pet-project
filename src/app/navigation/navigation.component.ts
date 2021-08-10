import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navLinks = [
    { route: '/', title: 'Home' },
    { route: 'adopt', title: 'Adopt', children: [{route: 'dogs', title: 'Adopt a Dog'}, {route: 'cats', title: 'Adopt a Cat'}] },
    { route: 'apply', title: 'Apply to Adopt'},
    { route: 'faq', title: 'FAQs'},
    { route: 'contact', title: 'Contact Us'}
  ];
}
