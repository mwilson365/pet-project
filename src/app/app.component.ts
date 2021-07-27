import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: any) {}

  skipToMain(e: any): void {
    e.preventDefault();
    this.document.querySelector('h1').focus();
  }
}
