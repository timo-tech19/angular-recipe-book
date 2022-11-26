import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe-book/recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test recipe',
      'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Recipe(
      'Test Recipe 2',
      'Content for test recipe 2',
      'https://images.pexels.com/photos/4099123/pexels-photo-4099123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return [...this.recipes];
  }
}
