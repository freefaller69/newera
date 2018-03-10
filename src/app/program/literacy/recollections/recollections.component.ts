import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recollections',
  templateUrl: './recollections.component.html',
  styleUrls: ['./recollections.component.scss']
})
export class RecollectionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
