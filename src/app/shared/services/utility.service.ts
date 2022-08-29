import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(private http: HttpService) {}

  //Custom functions will go here
  public covertDateToIsoString(date: any): Date {
    return new Date(date);
  }
}
