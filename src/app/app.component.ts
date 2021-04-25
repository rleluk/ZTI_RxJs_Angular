import { Component } from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: any[];
  resultEvent = new Subject<any[]>();
  constructor() {
    this.resultEvent.subscribe(result => this.result = result);
  }
}
