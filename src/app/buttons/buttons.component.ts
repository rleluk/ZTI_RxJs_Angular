import {Component, Input} from '@angular/core';
import {ApiService} from '../api.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input()
  resultEvent: Subject<any[]>;
  constructor(private apiService: ApiService) {}

  hpAPI(): void {
    this.apiService.getGryffindor().subscribe(result => this.resultEvent.next(result));
  }

  swAPI(): void {
    this.apiService.getAni().subscribe(result => this.resultEvent.next(result));
  }
}
