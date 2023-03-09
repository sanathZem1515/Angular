import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService implements OnInit {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  url : string = 'https://shopping-list-65b39-default-rtdb.firebaseio.com/recipes.json';

  ngOnInit(): void {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put(this.url,recipes).subscribe((responseData)=>{
        console.log(responseData);
    });
  }

  fetchRecipes () {
    return this.http.get<Recipe[]>(this.url).subscribe((recipes)=>{
        this.recipeService.setRecipes(recipes);
    });
  }
}
