import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.page.html',
  styleUrls: ['./policy.page.scss'],
  standalone: false
})
export class PolicyPage implements OnInit {
  policy:any=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.loadpolicy();

  }
  ionViewWillEnter(){
    this.loadpolicy(); 
  }

  loadpolicy() {
    this.http
      .get("http://localhost/insurance/policy.php")
      .subscribe(data=>{ 
        console.log(data); 
        this.policy=data; 
      })
  }

}
