import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.page.html',
  styleUrls: ['./addpolicy.page.scss'],
  standalone: false
})
export class AddpolicyPage implements OnInit {

  Customer_ID: string = '';
  Product_ID: string = '';
  Agent_ID: string = '';
  Issue_Date: string = '';
  Expiry_Date: string = '';
  Premium_Amount: number = 0;
  Annual_Limit: number = 0;
  Status: string = 'Active';

  customer: any[] = [];
  product: any[] = [];
  agent: any[] = [];

  today: string = new Date().toISOString().split('T')[0];
  maxYear: string = (new Date().getFullYear() + 50) + '-12-31';
  minYear: string = (new Date().getFullYear() - 75) + '-01-01';

  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit() {
    this.loadCustomer();
    this.loadProduct();
    this.loadAgent();
  }

  // โหลดลูกค้า
  loadCustomer() {
    this.http.get<any[]>('http://localhost/insurance/customer.php')
      .subscribe(data => this.customer = data);
  }

  // โหลดผลิตภัณฑ์
  loadProduct() {
    this.http.get<any[]>('http://localhost/insurance/product.php')
      .subscribe(data => this.product = data);
  }

  // โหลดตัวแทน
  loadAgent() {
    this.http.get<any[]>('http://localhost/insurance/agent.php')
      .subscribe(data => this.agent = data);
  }

  // เมื่อเลือก Product
  onProductChange(productId: string) {
    const selected = this.product.find(p => p.Product_ID === productId);
    if (selected) {
      this.Premium_Amount = selected.Base_Premium || 0;
      this.Annual_Limit = selected.Coverage_Amount || 0;
    } else {
      this.Premium_Amount = 0;
      this.Annual_Limit = 0;
    }
  }

  // บันทึกกรมธรรม์
  addPolicy() {
    // debug
   console.log(
  this.Customer_ID,
  this.Product_ID,
  this.Agent_ID,
  this.Issue_Date,
  this.Expiry_Date,
  this.Premium_Amount,
  this.Annual_Limit,
  this.Status
);

this.http.post<any>("http://localhost/insurance/insert_policy.php", {
  Customer_ID: this.Customer_ID,
  Product_ID: this.Product_ID,
  Agent_ID: this.Agent_ID,
  Issue_Date: this.Issue_Date,
  Expiry_Date: this.Expiry_Date,
  Premium_Amount: this.Premium_Amount,
  Annual_Limit: this.Annual_Limit,
  Status: this.Status
}).subscribe(res=>{
    this.route.navigateByUrl('/policy');
    })
  }
}

