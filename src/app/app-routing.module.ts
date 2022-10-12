import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

const routes: Routes = [
  { path: 'cocktailList', component: CocktailListComponent},
  { path: '**', component: CocktailListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
