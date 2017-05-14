import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]=[
    new Recipe('Schnitzel', 'Very tasty', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
