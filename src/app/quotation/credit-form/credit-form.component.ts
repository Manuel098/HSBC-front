import { Component, OnInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.scss']
})
export class CreditFormComponent implements OnInit {
  URL="../../../assets/Fotos/family.jpg";
  label=['CRÉDITO HSBC','','','',''];
  mat=['CRÉDITO HSBC','','','',''];
  private _tickInterval = 1;
  autoTicks = true;
  showTicks = true;
  value = 0;
  step = 0;


  constructor() { }

  ngOnInit() {
    
  }

  formatLabel(value: number) {
    if (value >= 100) {
      return"$"+ Math.round(value / 100) + 'mil';
    }
    return value;
  }
  getValue(){
    console.log(this.value);
  }

  get tickInterval(): number | 'auto' {
    this.getValue();
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this.mat[2]="$"+ Math.round( coerceNumberProperty(value)/ 100).toString() + 'mil';
    this._tickInterval = coerceNumberProperty(value);
  }
   
  setStep(index: number, label:string) {
    this.step = index;
    if (index == 1){
      this.label[0] = label.valueOf();
      this.mat[0]=label.valueOf();
      switch (label){
        case "Comprar un Auto":
          this.URL ="../../../assets/Fotos/FamCarr.jpg";
          break;
        case "Irme de Viaje":
          this.URL ="../../../assets/Fotos/holidays.jpg";
          break;
        default:
          this.URL ="../../../assets/Fotos/family.jpg";
          break;
      }
    }else if (index == 2){
      this.label[1] = label.valueOf();
      this.mat[1] = label.valueOf();
    } 
  }
}
