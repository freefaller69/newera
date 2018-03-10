import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sooregon',
  templateUrl: './sooregon.component.html',
  styleUrls: ['./sooregon.component.scss']
})
export class SooregonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
