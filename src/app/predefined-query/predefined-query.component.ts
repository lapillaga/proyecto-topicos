import {Component, OnInit} from '@angular/core';
import {YenaServiceService} from 'src/app/services/yena-service.service';
import {TableColumn} from './interfaces/table-column.interface';

@Component({
    selector: 'vex-predefined-query',
    templateUrl: './predefined-query.component.html',
    styleUrls: ['./predefined-query.component.scss']
})
export class PredefinedQueryComponent implements OnInit {
    tableData: any [] = [];
    tableColumns: TableColumn<any>[] = [
        {
            label: '',
            property: '1',
            type: 'text'
        },
        {
            label: '',
            property: '2',
            type: 'text',
            cssClasses: ['font-medium']
        },
    ];

    tableData2: any [] = [];
    tableColumns2: TableColumn<any>[] = [
        {
            label: '',
            property: '1',
            type: 'text'
        },
        {
            label: '',
            property: '2',
            type: 'text',
            cssClasses: ['font-medium']
        },
    ];

    constructor(private yenaServiceService: YenaServiceService) {
    }

    queries = [
        'PREFIX ma: <http://www.semanticweb.org/pc/ontologies/2020/7/untitled-ontology-10#>' +
        'SELECT ?estudiante ?materia ' +
        'WHERE {' +
        '?m ma:TieneMaterias ?mat.' +
        '?mat ma:nombre ?materia.' +
        '?e ma:MatriculadoEn ?m.' +
        '?e ma:nombre ?estudiante.' +
        '}',
        'PREFIX ma: <http://www.semanticweb.org/pc/ontologies/2020/7/untitled-ontology-10#>' +
        'SELECT ?materia ?docente ' +
        'WHERE {' +
        '?mat ma:ImpartidaPor ?d.' +
        '?mat ma:nombre ?materia.' +
        '?d ma:nombre ?docente.' +
        '}'
    ];

    ngOnInit(): void {
        this.yenaServiceService.createQuery(this.queries[0])
            .subscribe((data) => {
                this.tableColumns.forEach((value, index) => {
                    value.label = data.head.vars[index];
                    value.property = data.head.vars[index];
                });
                this.tableData = data.results.bindings;
            });
        this.yenaServiceService.createQuery(this.queries[1])
            .subscribe((data) => {
                this.tableColumns2.forEach((value, index) => {
                    value.label = data.head.vars[index];
                    value.property = data.head.vars[index];
                });
                this.tableData2 = data.results.bindings;
            });
    }
}
