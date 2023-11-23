import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { FirebaseserviceService } from '../firebaseservice.service';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css'],
  preserveWhitespaces: true
})
export class MainscreenComponent implements OnInit {

  constructor(private firestore: Firestore, private router: Router,private firebaseService:FirebaseserviceService ) { }

  data: any;

  length: any;

  dtoptions: DataTables.Settings = {};
  dttrigger: Subject<any> = new Subject<any>();
  
  updateData(id: string) {
    this.router.navigate(['update-data/', id]);
  }

  getDataFromFirebase() {
    this.firebaseService.getFirebaseData().subscribe((res) => {
      this.data = res;
      this.length = res.length;
      this.dttrigger.next(null);
    });
  }

  deleteData(id: string) {
    this.firebaseService.deleteFirebaseData(id).then(() => {
      alert('Deleted Successfully');
      this.getDataFromFirebase(); // Refresh data after deletion
    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers'
    }
    this.getDataFromFirebase();
  }
}
