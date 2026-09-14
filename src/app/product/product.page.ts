import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone:false
})
export class ProductPage implements OnInit {
  product:any=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.loadproduct();

  }
  ionViewWillEnter(){
    this.loadproduct(); 
  }

  loadproduct() {
    this.http
      .get("http://localhost/insurance/product.php")
      .subscribe(data=>{ 
        console.log(data); 
        this.product=data; 
      })
  }

}
