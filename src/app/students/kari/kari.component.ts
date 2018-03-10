import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kari',
  templateUrl: './kari.component.html',
  styleUrls: ['./kari.component.scss']
})
export class KariComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
