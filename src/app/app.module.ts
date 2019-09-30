import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CreditFormComponent } from './quotation/credit-form/credit-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {
  MatButtonModule, MatCardModule, MatDialogModule,
  MatDividerModule, MatExpansionModule, MatFormFieldModule,
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatToolbarModule, MatNativeDateModule, MatIconModule,
  MatSidenavModule, MatListModule, MatTableModule, MatCheckboxModule,
  MAT_CHECKBOX_CLICK_ACTION
} from '@angular/material';
import { HeaderComponent } from './structure/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    MatSliderModule, MatButtonModule,
    BrowserAnimationsModule,MatCardModule, MatDialogModule,
    MatDividerModule, MatExpansionModule, MatFormFieldModule,
    MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatToolbarModule, MatNativeDateModule, MatIconModule,
    MatSidenavModule, MatListModule, MatTableModule, MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
