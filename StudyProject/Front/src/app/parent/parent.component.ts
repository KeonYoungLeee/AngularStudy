import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  age: number = 20;

  constructor() { }

  ngOnInit(): void {
  }
  
  next() {
    this.age = this.age + 1;
  }
}
