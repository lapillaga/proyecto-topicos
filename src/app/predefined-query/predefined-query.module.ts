import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredefinedQueryComponent } from './predefined-query.component';
import {PredefinedQueryRoutingModule} from 'src/app/predefined-query/predefined-query-routing.module';



@NgModule({
  declarations: [PredefinedQueryComponent],
  imports: [
    CommonModule,
      PredefinedQueryRoutingModule
  ]
})
export class PredefinedQueryModule { }
