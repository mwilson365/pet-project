import {Component, HostBinding, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Router} from '@angular/router';

/* Corresponds to Unifi default breakpoints.
*  If the defaults are customized in the theme file,
*  they will also need to be customized here to match. */
enum BREAKPOINTS {
  xs = '(min-width: 0px)',
  sm = '(min-width: 600px)',
  md = '(min-width: 960px)',
  lg = '(min-width: 1280px)',
  xl = '(min-width: 1920px)',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') class = 'app-root';

  mobileView!: boolean;

  constructor(@Inject(DOCUMENT) private document: any, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(BREAKPOINTS.md).subscribe((result) => {
      this.mobileView = !result.matches;
    });
  }

  skipToMain(e: any): void {
    e.preventDefault();
    this.document.querySelector('h1').focus();
  }
}
