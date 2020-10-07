import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

clickedCount : number =0;
  constructor() { }

  ngOnInit(): void {
  }

countClick(){
  this.clickedCount +=1;
}

}
