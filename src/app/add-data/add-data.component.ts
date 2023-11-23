import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
  preserveWhitespaces: true
})
export class AddDataComponent implements OnInit {

  addform!: FormGroup;

  data!: Observable<any>;
  // data:any;

  length: any;

  constructor(private fb: FormBuilder, private firestore: Firestore,private router:Router) { }

  submit() {
    console.log(this.addform.value);
    const collectionInstance = collection(this.firestore, 'users')
    addDoc(collectionInstance, this.addform.value).then(() => {
      alert("Data Saved Successfully");
      this.resetForm()
    }).catch((erro) => {
      console.log(erro);
    })
    this.router.navigate(['/mainscreen']);
  }


  resetForm() {
    this.addform.reset();
  }

  formDetails(){
    this.addform = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.formDetails();
  }

}
