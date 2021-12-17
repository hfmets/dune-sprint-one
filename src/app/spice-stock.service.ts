import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Stock } from './models/stock.model';

@Injectable({
  providedIn: 'root',
})
export class SpiceStockService {
  corsPrefix: string = 'https://mysterious-dawn-78553.herokuapp.com/';
  constructor(private http: HttpClient) {}

  getStockData(): Observable<Array<Stock>> {
    return this.http
      .get(
        this.corsPrefix + 'https://dune-stock-prices.web.app/spice-stock.json'
      )
      .pipe(map((res: any) => res.results));
  }
}
