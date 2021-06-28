import { Component, OnInit } from '@angular/core';
// declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StromLoop';
  ngOnInit(): void {
    // $(window).scroll(() => 
    // {
    //   let wScroll = $(this).scrollTop();
    //   $('.moon').css({
    //     'transform':'translate(0px,'+wScroll*1.53 + '%)'
    //   });
    // });
  }
  
}
