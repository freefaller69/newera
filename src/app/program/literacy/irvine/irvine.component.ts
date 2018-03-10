import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-irvine',
  templateUrl: './irvine.component.html',
  styleUrls: ['./irvine.component.scss']
})
export class IrvineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
