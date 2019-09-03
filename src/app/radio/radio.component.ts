import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  model;
  @Output() sortByEvent = new EventEmitter<string>();

  constructor() {
    this.model = {
      sortBy: "name"
    }
    this.returnModelState();
  }


  returnModelState() {
    //return the the model.sortBy value
    this.sortByEvent.emit(this.model.sortBy);
    return this.model.sortBy;
  }
}
