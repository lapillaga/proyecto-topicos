import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateQueryComponent} from './create-query.component';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CreateQueryRoutingModule } from './create-query-routing.module';
import { WidgetTableModule } from './widget-table/widget-table.module';



@NgModule({
    declarations: [CreateQueryComponent],
    imports: [
        CommonModule,
        CreateQueryRoutingModule,
        PageLayoutModule,
        BreadcrumbsModule,
        WidgetTableModule,
        FlexLayoutModule,
        MatIconModule,
        IconModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule
        
    ]
})
export class CreateQueryModule {
}
