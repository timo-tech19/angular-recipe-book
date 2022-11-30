import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onSubmit(e: Event) {
    e.preventDefault();

    this.shoppingListService.addIngredient(
      new Ingredient(
        this.nameRef.nativeElement.value,
        +this.amountRef.nativeElement.value
      )
    );
  }
}
