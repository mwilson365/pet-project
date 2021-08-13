import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {notificationAnimation} from '@nelnet/unifi-components-angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [notificationAnimation.fadeInOut]
})
export class ContactComponent {

  errorState = false;

  focusError(): void {
    if (this.errorState) {
      //Give the document time to recognize the notification
      setTimeout(() => {
        document.getElementById('errorMessage')!.focus();
      });
    }
  }

  focusInput(event: any, id: string): void {
    event.preventDefault();
    document.getElementById(id)!.focus();
  }

  submit(form: NgForm) {
    if (form.invalid) {
      this.errorState = true;
      this.focusError();
    }
  }

}
