import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public sortByParent: string;

  sortByChanged(event: string) {
    this.sortByParent = event;
  }

}
