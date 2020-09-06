import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateQueryComponent} from 'src/app/create-query/create-query.component';


const routes: Routes = [
    {
        path: '',
        component: CreateQueryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateQueryRoutingModule {
}
