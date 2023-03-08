import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex:number;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    console.log(this.form);
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex=index;
      }
    );
  }

  onAdd() {
    let name = this.form.value.name;
    let amount = +this.form.value.amount;
    this.shoppingListService.addIngredient(name, amount);
  }

  onDelete() {}

  onClear() {
    // this.name = ""
    // this.amount = undefined
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
