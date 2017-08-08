import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedFile(event: any) {
    const file: File = event.target.files[0];
    console.log("Selected filename: ", file.name);
  }

}
