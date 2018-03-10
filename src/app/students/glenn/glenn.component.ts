import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glenn',
  templateUrl: './glenn.component.html',
  styleUrls: ['./glenn.component.scss']
})
export class GlennComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
