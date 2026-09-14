import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
  standalone:false
})
export class AddcustomerPage implements OnInit {
  ID_Card_No:string='';
  title_id:number=0;
  title:any=[];
  First_Name:string='';
  Last_Name:string='';
  Date_Of_Birth:string='';
  Gender:string='';
  Phone:string='';
  Email:string='';
  Address:string='';


  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit() {
    this.loadtitle();
  }

  loadtitle(){
    this.http
      .get("http://localhost/insurance/title.php")
      .subscribe(data=>{ //เรียกใช้ Api
        this.title=data; //เก็บค่าไว้ใน data
      })
    }

  addcustomer() {
    console.log(this.ID_Card_No,this.title_id,this.First_Name,this.Last_Name,this.Date_Of_Birth,this.Gender,this.Phone,this.Email,this.Address);
    this.http.post<any>("http://localhost/insurance/insert_customer.php",
    {ID_Card_No:this.ID_Card_No,title_id:this.title_id,First_Name:this.First_Name,Last_Name:this.Last_Name,Date_Of_Birth:this.Date_Of_Birth,Gender:this.Gender,Phone:this.Phone,Email:this.Email,Address:this.Address})
    .subscribe(res=>{
    this.route.navigateByUrl('/customer');
    })
  }
}
