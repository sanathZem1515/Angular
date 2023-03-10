import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService implements OnInit {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  url: string =
    'https://shopping-list-65b39-default-rtdb.firebaseio.com/recipes.json';

  ngOnInit(): void {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put(this.url, recipes).subscribe((responseData) => {
      console.log(responseData);
    });
  }

  fetchRecipes() {
    this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get<Recipe[]>(this.url, {
          params: new HttpParams().set('auth', user.token),
        });
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return { ...recipe, ingredients: recipe.ingredients ?? [] };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
