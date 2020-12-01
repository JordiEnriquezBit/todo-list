import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FirebaseService } from './services/firebase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Item } from './interfaces/item';
import { ModalComponent } from './components/item/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-hooks';
  showFooter = true;
  itemList: Item[];
  constructor(private fb:FormBuilder,
              private firebaseService: FirebaseService,
              private dialog: MatDialog){

  }

  // @Output() output = new EventEmitter();

  // formGroup: FormGroup;

  createForm():FormGroup{
    return  this.fb.group({
      id:'',
      orderId:['',Validators.required],
      name:['',Validators.required],
      description:['',Validators.required]
    });
  }

  ngOnInit(){

    console.log('Soy un OnInit de AppComponent')
    // this.formGroup = this.createForm();
    this.firebaseService.getTotalItems$().subscribe(data => {this.itemList = data
      console.log(this.itemList);} );

 }

  addItem(item:Item){
      this.firebaseService.addItem(item);/* .then(console.log); */
  }

  toggleFooter(){
    this.showFooter =!this.showFooter;
  }


  openModal(){
    const dialogConfig =new MatDialogConfig();

    // this.formGroup.setValue(item);
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = this.createForm();
    /* {
      orderId:1,
      name:'prueba',
      description: 'prueba'
    } */

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data=> this.addItem(data))

}
}
