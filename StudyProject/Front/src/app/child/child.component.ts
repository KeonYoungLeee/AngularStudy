import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() name: string;
  @Input() age: number;

  @Output() next = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.next.emit();
    }, 2500);
  }

  click(text :string, event: Event): void {
    console.log(text);
    console.log(event);
  }

}
