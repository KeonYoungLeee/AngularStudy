import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @Input() age: number;
  @Output() up = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  next() {
    // this.age = this.age + 1 
    // 부모의 나이를 올리지 않을 것이다.

    this.up.emit(); // 이벤트 발생
  }
}
