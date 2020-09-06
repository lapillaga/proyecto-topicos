import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptQueryComponent } from './concept-query.component';
import {ConceptQueryRoutingModule} from 'src/app/concept-query/concept-query-routing.module';
import {SecondaryToolbarModule} from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import {BreadcrumbsModule} from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {IconModule} from '@visurel/iconify-angular';
import {MatTabsModule} from '@angular/material/tabs';
import {HighlightModule} from 'src/@vex/components/highlight/highlight.module';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [ConceptQueryComponent],
    imports: [
        CommonModule,
        ConceptQueryRoutingModule,
        SecondaryToolbarModule,
        BreadcrumbsModule,
        MatIconModule,
        FlexModule,
        MatInputModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        IconModule,
        MatTabsModule,
        HighlightModule,
        MatListModule,
        MatSelectModule
    ]
})
export class ConceptQueryModule { }
