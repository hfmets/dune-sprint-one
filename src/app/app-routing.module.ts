import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotePageComponent } from './quote-page/quote-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'dune-quotes', pathMatch: 'full' },
  { path: 'dune-quotes', component: QuotePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
