import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredefinedQueryComponent } from './predefined-query.component';
import {PredefinedQueryRoutingModule} from 'src/app/predefined-query/predefined-query-routing.module';
import {WidgetTableModule} from './widget-table/widget-table.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import {ContainerModule} from '../../@vex/directives/container/container.module';
import {PageLayoutModule} from '../../@vex/components/page-layout/page-layout.module';
import {MatButtonModule} from '@angular/material/button';
import {BreadcrumbsModule} from '../../@vex/components/breadcrumbs/breadcrumbs.module';



@NgModule({
  declarations: [PredefinedQueryComponent],
    imports: [
        CommonModule,
        PredefinedQueryRoutingModule,
        WidgetTableModule,
        CommonModule,
        FlexLayoutModule,
        MatIconModule,
        IconModule,
        WidgetTableModule,
        BreadcrumbsModule,
        MatButtonModule,
        PageLayoutModule,
        ContainerModule
    ]
})
export class PredefinedQueryModule { }
