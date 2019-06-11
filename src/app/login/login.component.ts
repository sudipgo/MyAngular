import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public JobNo: string;
  
  constructor() {
   }


  ngOnInit() {

  }
  
  session():void{
    
    sessionStorage.setItem("JobId",this.JobNo);
  }
}
