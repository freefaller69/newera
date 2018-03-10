import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeff',
  templateUrl: './jeff.component.html',
  styleUrls: ['./jeff.component.scss']
})
export class JeffComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
