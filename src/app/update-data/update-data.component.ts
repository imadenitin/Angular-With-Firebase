import { Component, OnInit } from '@angular/core';
import { Firestore, collection, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {
  updateform!: FormGroup;
  id: any;

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore,
    private activeroute: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.paramMap.get('id');
    this.updateform = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required]]
    });

    this.getDataFromFirebase();
  }

  update() {
    const docInstance = doc(this.firestore, 'users', this.id);
    const updateData = {
      name: this.updateform.get('name')?.value,
      email: this.updateform.get('email')?.value,
      contact: this.updateform.get('contact')?.value
    };

    updateDoc(docInstance, updateData)
      .then(() => {
        alert('Updated Successfully');
        this.router.navigate(['/mainscreen']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async getDataFromFirebase() {
    const docInstance = doc(this.firestore, 'users', this.id);
    const docSnap = await getDoc(docInstance);

    const data = docSnap.data();
      this.updateform.patchValue({
        name: data?.['name'],
        email: data?.['email'],
        contact: data?.['contact']
      });

    // if (docSnap.exists()) {
      
    // }
  }
}