import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateQueryComponent} from './create-query.component';
import {CreateQueryRoutingModule} from 'src/app/create-query/create-query-routing.module';


@NgModule({
    declarations: [CreateQueryComponent],
    imports: [
        CommonModule,
        CreateQueryRoutingModule
    ]
})
export class CreateQueryModule {
}
