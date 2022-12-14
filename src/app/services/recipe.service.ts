import { Injectable } from '@angular/core';
import { Recipe } from '../recipe-book/recipe.model';
import { Ingredient } from '../shared/ingredients.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      2,
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: number) {
    return this.getRecipes().find((recipe) => recipe.id === id);
  }
}
