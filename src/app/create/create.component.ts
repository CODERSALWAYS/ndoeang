import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProductService]
})
export class CreateComponent implements OnInit {

  constructor(private _productservice:ProductService, private router:Router) { }

  ngOnInit() {
  }

  createproductData(inputData){
    var inputValue = inputData.value;
    console.log('02', inputValue);
    this._productservice.createProduct(inputValue)
    .subscribe(response => {
      this.router.navigate(['/home']);
    }); 
  }
}
