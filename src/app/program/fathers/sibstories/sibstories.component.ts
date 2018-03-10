import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibstories',
  templateUrl: './sibstories.component.html',
  styleUrls: ['./sibstories.component.scss']
})
export class SibstoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
