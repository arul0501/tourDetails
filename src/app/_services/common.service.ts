import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { DataService } from '../_services/data.service';

@Injectable()
export class CommonService {
 public labelJsonData:any; 
   constructor(private dataService: DataService) { }

   getTourUserData(): Observable<any> {
     return this.dataService.getUserData();
    } 

}