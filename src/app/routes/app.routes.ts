
import {RecipesComponent} from "../recipes/recipes.component";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {RecipeStartComponent} from "../recipes/recipe-start.component";
import {RecipeEditComponent} from "../recipes/recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "../recipes/recipe-detail/recipe-detail.component";



const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent,
        children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent },
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
];

export const App_Routes_Providers: ModuleWithProviders = RouterModule.forRoot(appRoutes);