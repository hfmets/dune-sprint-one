import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Quote } from '../models/quote.model';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.css']
})
export class QuotePageComponent implements OnInit {

  quotes: Quote[] = [];
  books: Book[] = [];

  constructor(private quoteSvc: QuoteService) { }

  ngOnInit(): void {
    this.quoteSvc.getRandomQuotes().subscribe(results => this.quotes = results);
    this.quoteSvc.getBooks().subscribe(results => this.books = results);
  }


  updateQuotes() {
    this.quoteSvc.getRandomQuotes().subscribe(results => this.quotes = results);
  }
}
