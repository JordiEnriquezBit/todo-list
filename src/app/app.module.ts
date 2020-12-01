import { DialogComponent } from './components/display/dialog/dialog.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire';
import { AppMaterialModule } from './app.material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

import { ItemComponent } from './components/item/item.component';
import { ErrorComponent } from './components/error/error.component';
import { MessageComponent } from './components/error/message/message.component';
import { ListComponent } from './components/display/list/list.component';
import { CardComponent } from './components/display/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { environment} from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/item/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ItemComponent,
    ErrorComponent,
    MessageComponent,
    ListComponent,
    CardComponent,
    DialogComponent,
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent,ModalComponent]
})
export class AppModule { }
