import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addApartment',
  templateUrl: './addApartment.component.html',
  styleUrls: ['./addApartment.component.scss']
})
export class AddApartmentComponent implements OnInit {
  imagesUrl !:FileList
  constructor() { }



  ngOnInit() {
  }

  addApartment(form:NgForm){
    console.log(form.value) ;
    console.log(form);
    
  }
  selectFiles(event): void {
    this.imagesUrl = event.target.files
    console.log(this.imagesUrl);
     
  }

}
