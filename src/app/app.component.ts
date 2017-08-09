import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";

import * as firebase from 'firebase';


interface fileUrl {
  url: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public fileStream: FirebaseObjectObservable<fileUrl>;

  constructor(private db: AngularFireDatabase) {
    this.fileStream = this.db.object('files');
  }

  selectedFile(event: any) {
    const file: File = event.target.files[0];

    const metaData = {'contentType': file.type};
    const storageRef: firebase.storage.Reference = firebase.storage().ref('/files/file');
    storageRef.put(file, metaData);
    console.log("Uploading filename: ", file.name);
  }

}
