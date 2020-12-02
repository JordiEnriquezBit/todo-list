import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Output() addItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){

    this.addItem.emit(this.formGroup.value);
  }



}
