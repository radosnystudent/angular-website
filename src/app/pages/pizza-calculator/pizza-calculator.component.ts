import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslatePipe } from '../../common/pipes/translate.pipe';
import { CardFieldComponent } from '../../components/core/card/card-field/card-field.component';
import { NgIf } from '@angular/common';
import { ButtonComponent } from '../../components/core/button/button.component';
import { NumberInputComponent } from '../../components/core/number-input/number-input.component';
import { ValueAccessorDirective } from '../../common/directives/value-accessor.directive';
import { CardComponent } from '../../components/core/card/card.component';

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
  standalone: true,
  imports: [
    CardComponent,
    FormsModule,
    ReactiveFormsModule,
    ValueAccessorDirective,
    NumberInputComponent,
    ButtonComponent,
    NgIf,
    CardFieldComponent,
    TranslatePipe,
  ],
})
export class PizzaCalculatorComponent {
  form: FormGroup<PizzaForm>;

  result!: {
    firstPizzaSize: string;
    firstPizzaPricePerSlice: string;
    secondPizzaSize: string;
    secondPizzaPricePerSlice: string;
    text: string;
  };

  private readonly PI = 3.1415;

  private readonly fb: FormBuilder = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group<PizzaForm>({
      diameter1: new FormControl(null, Validators.required),
      price1: new FormControl(null, Validators.required),
      quantity1: new FormControl(null, Validators.required),
      diameter2: new FormControl(null, Validators.required),
      price2: new FormControl(null, Validators.required),
      quantity2: new FormControl(null, Validators.required),
    });
  }

  calculate(): void {
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
      text: this.getPizzaCalculationResult(
        finalCostFirstPizza,
        finalCostSecondPizza
      ),
      firstPizzaSize: this.getPizzaSize('diameter1', 'quantity1').toFixed(2),
      firstPizzaPricePerSlice: finalCostFirstPizza.toFixed(12),
      secondPizzaSize: this.getPizzaSize('diameter2', 'quantity2').toFixed(2),
      secondPizzaPricePerSlice: finalCostSecondPizza.toFixed(12),
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

  private getPizzaCalculationResult(
    finalCostFirstPizza: number,
    finalCostSecondPizza: number
  ): string {
    if (finalCostFirstPizza === finalCostSecondPizza) {
      return 'pizzapage.field.value.draw';
    } else if (finalCostFirstPizza < finalCostSecondPizza) {
      return 'pizzapage.field.value.firstPizza';
    } else {
      return 'pizzapage.field.value.secondPizza';
    }
  }
}
