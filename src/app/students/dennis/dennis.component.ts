import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dennis',
  templateUrl: './dennis.component.html',
  styleUrls: ['./dennis.component.scss']
})
export class DennisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
