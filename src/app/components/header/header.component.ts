import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleFooterEvt = new EventEmitter();
  @Output() openModalEvt = new EventEmitter();

  /* showFooter = true; */

  constructor() { }

  ngOnInit(): void {
  }

  toggleFooter(){
    /* this.showFooter = !this.showFooter; */
    this.toggleFooterEvt.emit();
  }

  openModal(){
    this.openModalEvt.emit();
  }
}
