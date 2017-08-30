import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CInputComponent } from './c-input/c-input.component';
import { CButtonComponent } from './c-button/c-button.component';
import { CSelectComponent } from './c-select/c-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CDatapickerComponent } from './c-datapicker/c-datapicker.component';
import { MdSelectModule, MdInputModule, MdNativeDateModule, MdButtonModule, MdDatepickerModule } from '@angular/material';
import { CdkTableModule } from "@angular/cdk/table";

@NgModule({
  declarations: [
    AppComponent,
    CInputComponent,
    CButtonComponent,
    CSelectComponent,
    CDatapickerComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdSelectModule,
    MdNativeDateModule,
    MdButtonModule,
    MdDatepickerModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
