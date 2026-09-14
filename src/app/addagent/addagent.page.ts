import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addagent',
  templateUrl: './addagent.page.html',
  styleUrls: ['./addagent.page.scss'],
  standalone:false
})
export class AddagentPage implements OnInit {
  title_id:number=0;
  title:any=[];
  First_Name:string='';
  Last_Name:string='';
  License_No:string='';
  Phone:string='';
  Email:string='';
  Branch:string='';


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
    console.log(this.title_id,this.First_Name,this.Last_Name,this.License_No,this.Phone,this.Email,this.Branch);
    this.http.post<any>("http://localhost/insurance/insert_agent.php",
    {title_id:this.title_id,First_Name:this.First_Name,Last_Name:this.Last_Name,License_No:this.License_No,Phone:this.Phone,Email:this.Email,Branch:this.Branch})
    .subscribe(res=>{
    this.route.navigateByUrl('/agent');
    })
  }

}
