import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

export interface Day {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})

export class PersonalFormComponent implements OnInit {
  data = {
    name:'',
    apMat:'',
    apPat:'',
    sex:'',
    celNum: '',
    fijNum:'',
    mail: '',
    picker:'',
    nacionality: '',
    RFC: '',
    CURP:''
  };
  states =['Extranjero','Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas',
    'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero',
    'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos',	'Nayarit',	'Nuevo León', 'Oaxaca',
    'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco',
    'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'
  ];
  emailFormControl = new FormControl('', [
    Validators.email,
  ]);
  selectedSex:string;
  
  constructor() { }

  ngOnInit() {
  }
  simon(){
    if(this.emailFormControl.status=="INVALID"){
      console.log("the email "+this.emailFormControl.value+" is invalid");
    }else{
      this.data.mail = this.emailFormControl.value;
      console.log(this.data);
      console.log("the email "+this.emailFormControl.value+" is valid");
    }
  }
}
