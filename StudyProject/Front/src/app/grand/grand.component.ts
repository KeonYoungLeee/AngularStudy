import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.scss']
})
export class GrandComponent implements OnInit {
  age:number = 35;

  constructor() { }

  ngOnInit(): void {
  }

  // 여기서 받아 줄 데이터를 정한다.
  up(): void {
    this.age = this.age + 1;
  }

}
