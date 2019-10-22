import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CreditFormComponent } from './quotation/credit-form/credit-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {
  MatButtonModule, MatSelectModule, MatCardModule, MatDialogModule,
  MatDividerModule, MatExpansionModule, MatFormFieldModule, MatProgressBarModule,
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatToolbarModule, MatNativeDateModule, MatIconModule, MatDatepickerModule,
  MatSidenavModule, MatListModule, MatTableModule, MatCheckboxModule,
  MAT_CHECKBOX_CLICK_ACTION
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './structure/header/header.component';
import { PersonalFormComponent } from './data/personal-form/personal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditFormComponent,
    HeaderComponent,
    PersonalFormComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule, MatDatepickerModule,
    MatSliderModule, MatButtonModule, FormsModule, MatSelectModule,
    BrowserAnimationsModule,MatCardModule, MatDialogModule, MatProgressBarModule,
    MatDividerModule, MatExpansionModule, MatFormFieldModule,
    MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatToolbarModule, MatNativeDateModule, MatIconModule,
    MatSidenavModule, MatListModule, MatTableModule, MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
