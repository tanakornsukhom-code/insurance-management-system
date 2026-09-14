import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpolicy-agent',
  templateUrl: './addpolicy-agent.page.html',
  styleUrls: ['./addpolicy-agent.page.scss'],
  standalone: false
})
export class AddpolicyAgentPage implements OnInit {
  Policy_No: string = '';
  Agent_ID: string = '';
  Commission_Rate: number = 0;
  Commission_Amount: number = 0;
  Premium_Amount: number = 0; // ✅ เพิ่มตัวนี้
  policy: any = [];
  agent: any = [];
  customer: any = [];

  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit() {
    this.loadpolicy();
    this.loadagent(); 
    this.loadcustomer();
  }
  loadcustomer() {
    this.http.get("http://localhost/insurance/policy_customer.php").subscribe(data => {
      this.customer = data;
    });
  }

  loadpolicy() {
    this.http.get("http://localhost/insurance/policyagent.php").subscribe(data => {
      this.policy = data;
    });
  }

  loadagent() {
    this.http.get("http://localhost/insurance/agent.php").subscribe(data => {
      this.agent = data;
    });
  }

  // ✅ เมื่อผู้ใช้เลือกกรมธรรม์ ให้ดึงค่าเบี้ยมาเก็บไว้
  onPolicyChange() {
    const selected = this.policy.find((p: any) => p.Policy_No === this.Policy_No);
    if (selected) {
      this.Premium_Amount = parseFloat(selected.Premium_Amount);
      this.calculateCommission();
    }
  }

  // ✅ เมื่อผู้ใช้กรอก Commission_Rate ให้คำนวณใหม่
  calculateCommission() {
    if (this.Premium_Amount && this.Commission_Rate) {
      this.Commission_Amount = this.Premium_Amount * (this.Commission_Rate / 100);
    } else {
      this.Commission_Amount = 0;
    }
  }

  addPolicyAgent() {
    this.http.post<any>('http://localhost/insurance/insert_policy_agent.php', {
      Policy_No: this.Policy_No,
      Agent_ID: this.Agent_ID,
      Commission_Rate: this.Commission_Rate,
      Commission_Amount: this.Commission_Amount
    }).subscribe(res => {
      this.route.navigateByUrl('/policyagent');
    });
  }
}
