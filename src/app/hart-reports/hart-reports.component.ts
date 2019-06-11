import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hart-reports',
  templateUrl: './hart-reports.component.html',
  styleUrls: ['./hart-reports.component.less']
})
export class HartReportsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private location:Location) { }

  ngOnInit() {
    const jobId=this.route.snapshot.paramMap.get("JobId");
    if(jobId == null || jobId == "undefined"){
      console.log("back");
      this.location.back();
    }

    console.log(jobId);
  }

}
