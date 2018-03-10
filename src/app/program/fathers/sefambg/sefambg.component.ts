import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sefambg',
  templateUrl: './sefambg.component.html',
  styleUrls: ['./sefambg.component.scss']
})
export class SefambgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
