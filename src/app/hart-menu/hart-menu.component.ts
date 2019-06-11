import { Component, OnInit } from '@angular/core';
import {Menu} from '../menu';
import { MainMenu } from '../MainMenu';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hart-menu',
  templateUrl: './hart-menu.component.html',
  styleUrls: ['./hart-menu.component.less']
})
export class HartMenuComponent implements OnInit {


  private menu:MainMenu[];
  constructor(private http:HttpClient) { 
  }

  ngOnInit() {
    
    const JobId=sessionStorage.getItem("JobId");

    http://localhost/HartSystemApi/api/values/200
    const url="http://localhost/HartSystemApi/api/values/"+JobId;
  
       this.getMenu(url).subscribe(data=>{
      this.menu=data;
       });
    }
  
    getMenu(url:string):Observable<MainMenu[]>{
        return this.http.get<MainMenu[]>(url)
    }
    

}
