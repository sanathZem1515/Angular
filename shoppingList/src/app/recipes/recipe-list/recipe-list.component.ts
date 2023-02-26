import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is test',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eatingwell.com%2Frecipe%2F7949991%2Fcucumber-sandwich%2F&psig=AOvVaw2vOj-keoqXsK1UlrJIFByQ&ust=1677526658866000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCW6Pr3s_0CFQAAAAAdAAAAABAD'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
