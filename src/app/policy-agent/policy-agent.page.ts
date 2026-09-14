import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-policy-agent',
  templateUrl: './policy-agent.page.html',
  styleUrls: ['./policy-agent.page.scss'],
  standalone:false

})
export class PolicyAgentPage implements OnInit {
  policyagent:any=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.loadpolicyagent();
  }
  ionViewWillEnter(){
    this.loadpolicyagent(); 

}
  loadpolicyagent() {
    this.http
      .get("http://localhost/insurance/policyagent.php")
      .subscribe(data=>{ 
        console.log(data); 
        this.policyagent=data; 
      })
    }
  }
