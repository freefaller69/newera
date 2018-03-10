import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bronwyn',
  templateUrl: './bronwyn.component.html',
  styleUrls: ['./bronwyn.component.scss']
})
export class BronwynComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
