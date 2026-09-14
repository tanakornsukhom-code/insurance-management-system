import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.page.html',
  styleUrls: ['./claim.page.scss'],
  standalone:false
})
export class ClaimPage implements OnInit {
claim:any=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.loadclaim();

  }
  ionViewWillEnter(){
    this.loadclaim(); 
  }

  loadclaim() {
    this.http
      .get("http://localhost/insurance/claim.php")
      .subscribe(data=>{ 
        console.log(data); 
        this.claim=data; 
      })
  }

}