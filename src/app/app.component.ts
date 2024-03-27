import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertBtnComponent } from './pages/convert-btn/convert-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ConvertBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'table-converter-app';
  // //Make HTTP POST request and await its response
            // await this.http.post("https://script.google.com/macros/s/AKfycbz62dRUg6jUlZ2gsi1okoSSXVDTqGLyqefV3xELd3MH2lK_OD7W0sizOcKR4FDlUcofHQ/exec", JSON.stringify(dataSet)).toPromise()
            //   .then(data => {
            //     console.log(data);
            //     // Continue loop
            //   })
            //   .catch(error => {
            //     console.error(error);
            //     // Handle error if needed
            //   });
  
            // Add delay after each HTTP POST request if necessary
            // await this.delay(80);
}
