import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from './models/book.model';
import { Quote } from './models/quote.model';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  getRandomQuote(): Observable<Quote> {
    return this.http
      .get('https://the-dune-api.herokuapp.com/quotes')
      .pipe(map((res: any) => res[0]));
  }

  getRandomQuotes(): Observable<Array<Quote>> {
    return this.http
      .get('https://the-dune-api.herokuapp.com/quotes/12')
      .pipe(map((res: any) => res));
  }

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get('https://the-dune-api.herokuapp.com/books/22')
      .pipe(map((res: any) => res));
  }
}
