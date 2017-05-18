import {Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {RecipeService} from "../recipe.service";
import {Ingredient} from "../../shared/ingredient";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private recipeIndex:number;
  private subscription: Subscription;
  constructor(private sls: ShoppingListService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private recipesService: RecipeService) { }

  ngOnInit() {
   this.subscription = this.activatedRoute.params.subscribe(
       (params: any)=>{
         this.recipeIndex = params['id'];
         console.log(this.recipeIndex);
         this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);

        // console.log(this.selectedRecipe);
       }
   );
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete(){
    this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }
  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
