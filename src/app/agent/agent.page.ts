import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.page.html',
  styleUrls: ['./agent.page.scss'],
  standalone:false
})
export class AgentPage implements OnInit {
  agent:any=[];

  constructor(private http:HttpClient) { }

   ngOnInit() {
    this.loadagent();

  }
  ionViewWillEnter(){
    this.loadagent(); 
  }

  loadagent() {
    this.http
      .get("http://localhost/insurance/agent.php")
      .subscribe(data=>{ 
        console.log(data); 
        this.agent=data; 
      })
  }

}
