import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  events: any[] = [];
  ngOnInit() {
    this.events = [
      { content: 'Ordered', date: '15/02/2021 10:30', status: 'R' },
      { content: 'Processing', date: '15/02/2021 14:00', status: 'R' },
      { content: 'Shipped', status: 'R', date: '15/02/2021 17:00' },
      { content: 'Delivered' },
    ]
  }

}
