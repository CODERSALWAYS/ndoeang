import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers:[ProductService]
})
export class UpdateComponent implements OnInit {
  private products = {};
  
  constructor(private _productservice:ProductService, private router:ActivatedRoute, private route:Router) { }

  ngOnInit() {
    this._productservice.getProductById(this.router.snapshot.params['id'])
    .subscribe(response => this.products = response);
  }

  updateProductData(inputData){
    let inputValue = inputData.value;
    // let id = this.router.snapshot.params['id'];
    this._productservice.updateProduct(inputValue)
    .subscribe(response => {
       this.route.navigate(['/home']);
    });
  }

}
