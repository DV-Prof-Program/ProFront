import { Component } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent {
  email: string = '';

  signUp() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(this.email)) {
      alert(`Redirecting to purchase page...\nYour email: ${this.email}`);
    } else {
      alert('Please enter a valid email address.');
    }
  }
}
