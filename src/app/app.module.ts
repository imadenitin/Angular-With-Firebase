import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddDataComponent } from './add-data/add-data.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { UpdateDataComponent } from './update-data/update-data.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import {DataTablesModule} from 'angular-datatables';
@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    UpdateDataComponent,
    MainscreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"ang-firebase-crud","appId":"1:354977677635:web:e7450ba0fd2f2c59a2aff6","databaseURL":"https://ang-firebase-crud-default-rtdb.firebaseio.com","storageBucket":"ang-firebase-crud.appspot.com","apiKey":"AIzaSyALmSCQddq9VxtZ4ZupQcl7R24GRdDfeaQ","authDomain":"ang-firebase-crud.firebaseapp.com","messagingSenderId":"354977677635","measurementId":"G-4QX431RQFH"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
