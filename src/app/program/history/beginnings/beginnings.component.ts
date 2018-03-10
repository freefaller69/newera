import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beginnings',
  templateUrl: './beginnings.component.html',
  styleUrls: ['./beginnings.component.scss']
})
export class BeginningsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
