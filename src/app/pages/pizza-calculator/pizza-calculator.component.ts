import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface PizzaForm {
  diameter1: FormControl<number | null>;
  price1: FormControl<number | null>;
  quantity1: FormControl<number | null>;
  diameter2: FormControl<number | null>;
  price2: FormControl<number | null>;
  quantity2: FormControl<number | null>;
}

@Component({
  selector: 'sw-pizza-calculator',
  templateUrl: './pizza-calculator.component.html',
})
export class PizzaCalculatorComponent {
  form: FormGroup<PizzaForm>;

  result!: {
    firstPizzaWin: boolean;
    secoundPizzaWin: boolean;
  };

  private readonly PI = 3.1415;

  constructor(private readonly fb: FormBuilder) {
    this.form = new FormGroup<PizzaForm>({
      diameter1: new FormControl(null, Validators.required),
      price1: new FormControl(null, Validators.required),
      quantity1: new FormControl(null, Validators.required),
      diameter2: new FormControl(null, Validators.required),
      price2: new FormControl(null, Validators.required),
      quantity2: new FormControl(null, Validators.required),
    });
  }

  calculate() {
    const finalCostFirstPizza = this.calculatePizzaCost(
      'diameter1',
      'quantity1',
      'price1'
    );
    const finalCostSecondPizza = this.calculatePizzaCost(
      'diameter2',
      'quantity2',
      'price2'
    );

    this.result = {
      firstPizzaWin: finalCostFirstPizza <= finalCostSecondPizza,
      secoundPizzaWin: finalCostSecondPizza <= finalCostFirstPizza,
    };
  }

  private calculatePizzaCost(
    diameterIndex: 'diameter1' | 'diameter2',
    quantityIndex: 'quantity1' | 'quantity2',
    priceIndex: 'price1' | 'price2'
  ): number {
    return (
      (this.getPizzaPrice(priceIndex) * this.getPizzaQuantity(quantityIndex)) /
      this.getPizzaSize(diameterIndex, quantityIndex)
    );
  }

  private getPizzaPrice(index: 'price1' | 'price2'): number {
    return this.form.controls[index].value ?? 0;
  }

  private getPizzaQuantity(index: 'quantity1' | 'quantity2'): number {
    return this.form.controls[index].value ?? 1;
  }

  private getPizzaSize(
    diameterIndex: 'diameter1' | 'diameter2',
    quantityIndex: 'quantity1' | 'quantity2'
  ): number {
    return (
      this.PI *
      this.getPizzaRadius(diameterIndex) *
      this.getPizzaRadius(diameterIndex) *
      this.getPizzaQuantity(quantityIndex)
    );
  }

  private getPizzaRadius(index: 'diameter1' | 'diameter2'): number {
    return (this.form.controls[index].value ?? 0) / 2;
  }
}
