import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  display=false;

  toggle() {
  this.display = !this.display;

  if(this.display)  
    this.title = "";
  else
    this.title = 'Tour of Heroes'
}
}
