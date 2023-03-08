import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {  NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') form:NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    console.log(this.form);
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
}
