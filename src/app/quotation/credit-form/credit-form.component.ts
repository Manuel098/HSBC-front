import { Component, OnInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.scss']
})
export class CreditFormComponent implements OnInit {
  step = 0;
  autoTicks = true;
  showTicks = true;
  value = 0;
  label:string='CRÉDITO HSBC';
  constructor() { }

  ngOnInit() {
    
  }

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;
   
  setStep(index: number, label:string) {
    this.label = label;
    this.step = index;
  }
}
