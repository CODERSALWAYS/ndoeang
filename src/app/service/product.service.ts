import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    private _getUrl = "http://localhost:3000/getlist";
    private _postCreateUrl = "http://localhost:3000/createproduct";
    private _getProductByIdUrl = "http://localhost:3000/getproductbyid?id=";
    private _putUpdateProductUrl = "http://localhost:3000/updateproduct?id=";
    private _deleteProductUrl = "http://localhost:3000/delete?id=";
    constructor(private _http:Http) {}

  getProduct(){
    // const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('authentication', `hello`);
    //     headers.append('Access-Control-Allow-Origin: *', 'localhost:3000');
    // let options = new RequestOptions({headers:headers}); 
    return this._http.get(this._getUrl)
    .map((response:Response) => response.json());
  }

  createProduct(inpuData){
    console.log('service', inpuData);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this._http.post(this._postCreateUrl, JSON.stringify(inpuData), options)
    .map((response:Response)=>response.json());
  }

  getProductById(id){
    // console.log('ser', id);
    return this._http.get(this._getProductByIdUrl+''+id)
    .map((response:Response)=>response.text() ? response.json() : response);
  }

  updateProduct(inputData){
    console.log('01', inputData);
    var headers = new Headers({'Content-type':'application/json'});
    var options = new RequestOptions({headers:headers});
    return this._http.put(this._putUpdateProductUrl, JSON.stringify(inputData), options)
    .map((response:Response) => response.json());
  }
  deleteProduct(id){
    return this._http.delete(this._deleteProductUrl+''+id)
    .map((response:Response)=>response.json());
  }
}
