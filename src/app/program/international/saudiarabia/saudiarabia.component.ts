import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saudiarabia',
  templateUrl: './saudiarabia.component.html',
  styleUrls: ['./saudiarabia.component.scss']
})
export class SaudiarabiaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
