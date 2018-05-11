import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }

  wordcount = 0;
  keyup($event: KeyboardEvent) {
    console.log($event);
    if($event.key === 'Escape') {
      $event.target.value = '';
    }
    this.wordcount = $event.target.value.length;
  }
}
