import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-christy',
  templateUrl: './christy.component.html',
  styleUrls: ['./christy.component.scss']
})
export class ChristyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
