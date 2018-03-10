import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alison',
  templateUrl: './alison.component.html',
  styleUrls: ['./alison.component.scss']
})
export class AlisonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
