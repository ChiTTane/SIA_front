import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  active = [true, false, false, false]
  constructor() { }

  ngOnInit(): void {
  }
  activate(index: number) {
    this.active = [false, false, false, false]
    this.active[index]=true

  }

}
