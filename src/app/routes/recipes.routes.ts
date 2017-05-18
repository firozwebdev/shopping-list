import {Routes, RouterModule} from "@angular/router";

import {ModuleWithProviders} from "@angular/core";
import {RecipeStartComponent} from "../recipes/recipe-start.component";
import {RecipeDetailComponent} from "../recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "../recipes/recipe-edit/recipe-edit.component";
const recipeRoutes: Routes = [

    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },

];

export const Recipe_Routes: ModuleWithProviders = RouterModule.forChild(recipeRoutes);