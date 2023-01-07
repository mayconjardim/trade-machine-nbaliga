import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImgFallbackModule } from 'ngx-img-fallback';

import { AppComponent } from './app.component';
import { TradeMachineComponent } from './components/trade-machine/trade-machine.component';

@NgModule({
  declarations: [AppComponent, TradeMachineComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ImgFallbackModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
