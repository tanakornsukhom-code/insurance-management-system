import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
  standalone:false
})
export class AddproductPage implements OnInit {
  Product_Name:string='';
  Type:string='';
  Description:string='';
  Coverage_Amount:number = 0;
  Base_Premium:number = 0;

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit() {
  }

  addproduct() {
    console.log(this.Product_Name,this.Type,this.Description,this.Coverage_Amount,this.Base_Premium);
    this.http.post<any>("http://localhost/insurance/insert_product.php",
    {Product_Name:this.Product_Name,Type:this.Type,Description:this.Description,Coverage_Amount:this.Coverage_Amount,Base_Premium:this.Base_Premium})
    .subscribe(res=>{
    this.route.navigateByUrl('/product');
    })
  }
}
