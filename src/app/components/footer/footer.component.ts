import { Input, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  listLength:number;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
      console.log('Bye, bye footer');
  }





}
