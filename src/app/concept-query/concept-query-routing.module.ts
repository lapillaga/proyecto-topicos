import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConceptQueryComponent} from 'src/app/concept-query/concept-query.component';


const routes: Routes = [
    {
        path: '',
        component: ConceptQueryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConceptQueryRoutingModule {
}
