import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chdd',
  templateUrl: './chdd.component.html',
  styleUrls: ['./chdd.component.scss']
})
export class ChddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
