import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {
  birthdays = [
    {
      name: "John Sina",
      birth: "11/30/2011"
    }, {
      name: "Barcy Washington",
      birth: "09/16/1992"
    }, {
      name: "Peter Parker",
      birth: "01/16/1992"
    }, {
      name: "Jimmy Shergil",
      birth: "12/12/2001"
    }, {
      name: "Alexander Alfred",
      birth: "02/09/1891"
    }, {
      name: "Krishna Gupta",
      birth: "12/01/1982"
    }, {
      name: "Sania Mirza",
      birth: "11/30/2011"
    }, {
      name: "Lata Pathak",
      birth: "10/31/1999"
    }
  ];
  // this takes input from the radio component
  @Input() sortBy: string;
  constructor() {
      
    }

  ngOnChanges() {
      this.arrangeItems();
  }

  arrangeItems() {
    if(this.sortBy == 'age') {
        this.birthdays.sort(this.compareDates);
    } else {
        this.birthdays.sort(this.compareNames);
    }

      
    }

    compareDates(a, b) {
      if (new Date(a.birth) > new Date(b.birth)) {
           return 1;
       }
        if (new Date(a.birth) < new Date(b.birth)) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }

    compareNames(a, b) {
      if (a.name > b.name) {
           return 1;
       }
        if (a.name < b.name) {
            return -1;
        }
        // a must be equal to b
        return 0; 
    }

    getDate(str: string) {
      return new Date(str);
    }
}
