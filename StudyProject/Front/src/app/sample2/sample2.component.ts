import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.scss']
})
export class Sample2Component implements OnInit {

  name = 'mark';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.name = 'LEE'
    }, 2000);
  }

  // 메서드 생성
  onClickMe(event: Event): void {
    console.log(event);
    this.name = 'btnchange'
  }

}
