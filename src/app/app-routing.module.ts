import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotePageComponent } from './quote-page/quote-page.component';
import { StockPageComponent } from './stock-page/stock-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'dune-quotes', pathMatch: 'full' },
  { path: 'dune-quotes', component: QuotePageComponent },
  { path: 'spice-stocks', component: StockPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
