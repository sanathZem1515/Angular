import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Campfire-stew-afe40d7.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Campfire-stew-afe40d7.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
