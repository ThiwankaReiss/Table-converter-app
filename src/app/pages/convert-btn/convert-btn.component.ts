
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-convert-btn',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './convert-btn.component.html',
  styleUrl: './convert-btn.component.css'
})
export class ConvertBtnComponent implements OnInit {
  private http;
  public itemsList: any;
  public newArray: any[] = [];
  private terms = []

  constructor(private httpCient: HttpClient) {
    this.http = httpCient;
  }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    Swal.fire('Loading')
    Swal.showLoading();
    this.http.get("https://script.google.com/macros/s/AKfycbxJeglwN93H0gX2rTa_n0G177y7FvzXfAXRc615K3kzQ13uY9d4o7YppcUWUZDyNa3zTQ/exec").subscribe(async (data) => {
      this.itemsList = data;
      console.log(data);

      for (let i = 0; i < this.itemsList.length; i++) {
        const element = this.itemsList[i];

        if (i == 0) {
          this.terms = this.itemsList[i];
        } else {
          for (let j = 1; j < element.length; j++) {
            const subElement = element[j];
            console.log(subElement)
            let dataSet = {
              age: element[0],
              frm: this.terms[j - 1],
              val: subElement
            }

            console.log(dataSet);

            this.newArray[i * (element.length - 1) + (j - 1) - 6] = dataSet;

          }
        }
      }
      console.log(this.newArray);
      Swal.fire('Enter')
      Swal.hideLoading();
      
    });
  }
  generateTable(){
    Swal.fire('Please wait')
    Swal.showLoading();
      this.http.post("https://script.google.com/macros/s/AKfycbwgkIWXi5A8XnsQS35EjLWNUA3d_GdBCw9P52oj0zoh8Qo2U5oBOO7Ak79yM9nhf81GPQ/exec", JSON.stringify(this.newArray))
      .subscribe(data => {
      Swal.fire({
          title: "Sucess!",
          text: "Table Generated Sucessfully!",
          icon: "success"
      });
      Swal.hideLoading();
        
      });
    
    
  }
  deleteTable(){
    Swal.fire('Please wait')
    Swal.showLoading();
    this.http.get("https://script.google.com/macros/s/AKfycbwgkIWXi5A8XnsQS35EjLWNUA3d_GdBCw9P52oj0zoh8Qo2U5oBOO7Ak79yM9nhf81GPQ/exec").subscribe((data)=>{
      Swal.fire({
        title: "Sucess!",
        text: "Table Deleted Sucessfully!",
        icon: "success"
    });
    Swal.hideLoading();
     
    });
  }
 
}