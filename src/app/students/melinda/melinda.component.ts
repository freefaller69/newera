import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-melinda',
  templateUrl: './melinda.component.html',
  styleUrls: ['./melinda.component.scss']
})
export class MelindaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
