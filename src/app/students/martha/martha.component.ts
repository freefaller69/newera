import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-martha',
  templateUrl: './martha.component.html',
  styleUrls: ['./martha.component.scss']
})
export class MarthaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
