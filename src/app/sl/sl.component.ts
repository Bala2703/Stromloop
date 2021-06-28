import { Component, OnInit } from '@angular/core';
// declare var $:any;
@Component({
  selector: 'app-sl',
  templateUrl: './sl.component.html',
  styleUrls: ['./sl.component.css']
})
export class SlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
 

  scroll()
  {document.querySelector('#sec')?.scrollIntoView({behavior:'smooth',block:'center'})}
}
