import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.scss']
})
export class Sample3Component implements OnInit {

  @Input() propsTest: string; 
  @Input() furitsList: string;


  @Output() custom = new EventEmitter();

  disabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.disabled = false;
      this.custom.emit();
    
    }, 1000);
  }

}
