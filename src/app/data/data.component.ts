import { Component, OnInit } from '@angular/core';
import { RootObject } from '../model/response.model';
import { ApicallService } from '../service/apicall.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  filter : string = "";
  responseData: RootObject[] = [];
  constructor(private apicallService : ApicallService) { }

  ngOnInit(): void {
    this.getDataOnLoad();
  }

  getDataOnLoad(){
    this.apicallService.getData().subscribe((data:any)=>{
      this.responseData = [];
      this.responseData = data;
    });

  }

  fetchData(filterName : string){
    this.filter = filterName;
    switch(filterName){
      case 'launchSuccess': this.apicallService.getLaunchSuccessData().subscribe((data:any)=>{
        this.responseData = [];
        this.responseData = data;
      });
        break;
      case 'launchAndLandSuccess': this.apicallService.getLaunchAndLandSuccessData().subscribe((data:any)=>{
        this.responseData = [];
        this.responseData = data;
      });
        break;
      case 'all': this.apicallService.getAllData().subscribe((data:any)=>{
        this.responseData = [];
        this.responseData = data;
      });
        break;
      case '' : this.getDataOnLoad();
        break;
    }
  }

}
