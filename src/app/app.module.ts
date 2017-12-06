import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './counter/form/form.component';
import { SummaryComponent } from './counter/summary/summary.component';
import { CounterComponent } from './counter/counter.component';
import { NinjaService } from './ninja.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SummaryComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NinjaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
