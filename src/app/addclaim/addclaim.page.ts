import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclaim',
  templateUrl: './addclaim.page.html',
  styleUrls: ['./addclaim.page.scss'],
  standalone: false
})
export class AddclaimPage implements OnInit {
  Policy_No: string = '';
  Date_Of_Illness: string = '';
  Claim_Date: string = '';
  Diagnosis: string = '';
  Claim_Amount_Requested: number = 0;
  Claim_Amount_Paid: number = 0;
  Status: string = '';

  policy: any = [];
  policy_customer: any = [];

  constructor(private http: HttpClient, private route: Router) {}
  
  ngOnInit() {
    this.loadpolicy_customer();
  }

  loadpolicy_customer() {
    this.http.get("http://localhost/insurance/policy_customer.php")
      .subscribe(data => {
        this.policy_customer = data; // เก็บค่าไว้ใน data
      });
  }


  // บันทึกเคลม
  addClaim() {
    console.log(
      this.Policy_No,
      this.Date_Of_Illness,
      this.Claim_Date,
      this.Diagnosis,
      this.Claim_Amount_Requested,
      this.Claim_Amount_Paid,
      this.Status
    );

    this.http.post<any>('http://localhost/insurance/insert_claim.php', {
      Policy_No: this.Policy_No,
      Date_Of_Illness: this.Date_Of_Illness,
      Claim_Date: this.Claim_Date,
      Diagnosis: this.Diagnosis,
      Claim_Amount_Requested: this.Claim_Amount_Requested,
      Claim_Amount_Paid: this.Claim_Amount_Paid,
      Status: this.Status
    }).subscribe(res => {
      console.log('Claim saved:', res);
      this.route.navigateByUrl('/claim');
    });
  }
}
