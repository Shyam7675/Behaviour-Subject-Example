import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn :'root'
})
export class DataShareService {
  subject = new BehaviorSubject<string>('Shyam'); 
  
  constructor() { }

}