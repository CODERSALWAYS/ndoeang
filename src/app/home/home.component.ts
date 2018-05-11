import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../service/product.service';
import { Product } from '../classes/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ProductService]
})
export class HomeComponent implements OnInit {
  private products = {};
  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.getProduct()
    .subscribe(response => this.products = response);
  }

}
