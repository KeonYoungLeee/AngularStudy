import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-quick-start';
  fruits = ['apple', 'banana', 'graph'];

  custom(): void {
    console.log('custom event')
  }
}
