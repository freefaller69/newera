import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patrick',
  templateUrl: './patrick.component.html',
  styleUrls: ['./patrick.component.scss']
})
export class PatrickComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
