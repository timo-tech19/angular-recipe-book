import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
