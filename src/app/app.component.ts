import { Component } from '@angular/core';

import { CommonService } from './_services/common.service';
import { DataService } from './_services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Search Using ng2-search-filter';
  public radioItems: Array<string>;
  model   = {option: 'Place'};
  public placeItems: Array<string>;
  modelPlace   = {option: 'Chennai'};
  public getUserDataResults:any;
  showPlaceOption: boolean = false;
  constructor(public commonService:CommonService, private dataService: DataService) {   
    this.radioItems = ['Branch', 'Branch ID', 'Place'];
    this.placeItems = ['Chennai', 'Bangalore', 'Hydrabed'];

    if(this.model.option === 'Place'){
      this.showPlaceOption = true;
    }
    this.commonService.getTourUserData().subscribe((data: any) => {
        this.getUserDataResults =  data.tourUser;               
    });
 } 

 clickAction(val: any) {
  this.model.option = val;
  this.showPlaceOption = false;
  if(this.model.option === 'Place'){
    this.showPlaceOption = true;
  }
 }


 loadData() { 
  
 }


  searchText: any;
  
}
