import { Component, OnInit, ViewChild } from '@angular/core';
import { DataComponent } from './data/data.component';
import { ApicallService } from './service/apicall.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SpaceX Launches';
  @ViewChild(DataComponent) dataComponent!: DataComponent;
  constructor() {

  }
  ngOnInit(): void {
  }

  onChange(event: any){
    var selectedFilter = event.target.value;
    this.dataComponent.fetchData(selectedFilter);
  }
}
