import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fathersstory',
  templateUrl: './fathersstory.component.html',
  styleUrls: ['./fathersstory.component.scss']
})
export class FathersstoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
