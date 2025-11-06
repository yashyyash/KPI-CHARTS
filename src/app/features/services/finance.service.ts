import { HttpClient } from '@angular/common/http';
import { Injectable , inject} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private _financialUrl = 'https://api.mydummyapi.com/categories/finance';
  // constructor() { }
  // i am avoiding constructor injection as it creates a clutter using inject() instead;
  private _http = inject(HttpClient); 

  getFinanceData():Observable<any>{
    return this._http.get<any>(this._financialUrl);
  }
}
