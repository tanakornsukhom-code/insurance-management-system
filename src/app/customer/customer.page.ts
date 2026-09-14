import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
  standalone:false
})
export class CustomerPage implements OnInit {
  customer:any=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.loadcustomer();

  }
  ionViewWillEnter(){
    this.loadcustomer(); 
  }

  loadcustomer() {
    this.http
      .get("http://localhost/insurance/customer.php")
      .subscribe(data=>{ 
        console.log(data); 
        this.customer=data; 
      })
  }

}
