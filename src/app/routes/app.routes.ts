
import {RecipesComponent} from "../recipes/recipes.component";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";



const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
];

export const App_Routes_Providers: ModuleWithProviders = RouterModule.forRoot(appRoutes);