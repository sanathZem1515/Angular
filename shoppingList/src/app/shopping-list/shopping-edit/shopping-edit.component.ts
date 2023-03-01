import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;


  constructor(private shoppingListService:ShoppingListService) {

  }

  ngOnInit(): void {
      
  }

  onAdd() {
    let name = this.nameInputRef.nativeElement.value;
    let amount = this.amountInputRef.nativeElement.value;
    this.shoppingListService.addIngredient(name,amount);
  }

  onDelete() {

  }

  onClear() {
    // this.name = ""
    // this.amount = undefined
  }

}
