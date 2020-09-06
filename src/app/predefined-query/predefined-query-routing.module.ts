import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PredefinedQueryComponent} from 'src/app/predefined-query/predefined-query.component';


const routes: Routes = [
    {
        path: '',
        component: PredefinedQueryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PredefinedQueryRoutingModule {
}
