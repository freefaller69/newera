import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstreplication',
  templateUrl: './firstreplication.component.html',
  styleUrls: ['./firstreplication.component.scss']
})
export class FirstreplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
