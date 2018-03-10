import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meyerschell',
  templateUrl: './meyerschell.component.html',
  styleUrls: ['./meyerschell.component.scss']
})
export class MeyerschellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
