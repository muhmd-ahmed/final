import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/_models/user.model';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor( private data: DataService) { }

  ngOnInit(): void {
  }

  onproduct(product: product){
      this.data.Product(product)
  }

}
