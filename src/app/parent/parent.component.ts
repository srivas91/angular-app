import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
childData?:String;
userName:String="Priyadharshini";
parentData(data:String){
  this.childData = data;
}
  ngOnInit(): void {
  }

}
