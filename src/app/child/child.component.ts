import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output()
notify: EventEmitter<String>=new EventEmitter<String>();
passData(){
  this.notify.emit("Child to Parent Data");
}
@Input()
uname?:String;
  constructor() { }

  ngOnInit(): void {
  }

}
