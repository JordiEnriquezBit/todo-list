import { FirebaseService } from './services/firebase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { Item } from './interfaces/item';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/display/list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-hooks';
  showFooter = true;
  itemList: Item[];
  //listLength:number;
  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService
  ) {}

  // @Output() output = new EventEmitter();

  formGroup: FormGroup;

  createForm(): FormGroup {
    return this.fb.group({
      id: '',
      orderId: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    console.log('Soy un OnInit de AppComponent');
    this.formGroup = this.createForm();
    this.firebaseService.getTotalItems$().subscribe((data) => {
      this.itemList = data;
      console.log(this.itemList);
      //this.listLength= this.itemList.length;
    });
  }

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(FooterComponent) viewChild: FooterComponent;

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this.viewChild.listLength = this.itemList.length;
  }

  ngDoCheck() {
    if (this.viewChild != null || this.viewChild != undefined) {
      this.viewChild.listLength = this.itemList.length;
      //this.viewChild1.itemList.length;
    }
  }

  addItem(item: Item) {
    this.firebaseService.addItem(item); /* .then(console.log); */
    //this.viewChild.listLength=this.itemList.length;
  }

  toggleFooter() {
    this.showFooter = !this.showFooter;
  }
}
