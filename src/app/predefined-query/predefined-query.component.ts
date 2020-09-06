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

    tableData3: any [] = [];
    tableColumns3: TableColumn<any>[] = [
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
    tableData4: any [] = [];
    tableColumns4: TableColumn<any>[] = [
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

    tableData5: any [] = [];
    tableColumns5: TableColumn<any>[] = [
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

    tableData6: any [] = [];
    tableColumns6: TableColumn<any>[] = [
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

    tableData7: any [] = [];
    tableColumns7: TableColumn<any>[] = [
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
        '}',
        'PREFIX ma: <http://www.semanticweb.org/pc/ontologies/2020/7/untitled-ontology-10#>' +
        'SELECT ?estudiante ?carrera ' +
        'WHERE {' +
        '?e ma:EstudiaCarrera ?c.' +
        '?e ma:nombre ?estudiante.' +
        '?c ma:nombre ?carrera.' +
        '}',
        'PREFIX ma: <http://www.semanticweb.org/pc/ontologies/2020/7/untitled-ontology-10#>' +
        'SELECT ?estudiante ?fechaMatricula ?periodo' +
        'WHERE {' +
        '?e ma:MatriculadoEn ?mat.' +
        '?e ma:nombre ?estudiante.' +
        '?mat ma:fecha ?fechaMatricula.' +
        '?mat ma:PertenecePeriodo ?p.' +
        '?p ma:nombre ?periodo.' +
        'FILTER regex(?periodo, "Diciembre 2020- Abril 2021").' +
        '}',
        'PREFIX ma: <http://www.semanticweb.org/pc/ontologies/2020/7/untitled-ontology-10#>' +
        'SELECT ?estudiante ?fechaMatricula ?materiaImpartida ?docente ' +
        'WHERE {' +
        '?e ma:MatriculadoEn ?mat.' +
        '?e ma:nombre ?estudiante.' +
        '?mat ma:fecha ?fechaMatricula.' +
        '?mat ma:TieneMaterias ?materia.' +
        '?materia ma:nombre ?materiaImpartida.' +
        '?materia ma:ImpartidaPor ?d.' +
        '?d ma:nombre ?docente.' +
        '}',

        'PREFIX ma: <http://www.semanticweb.org/pc/ontologies/2020/7/untitled-ontology-10#>' +
        'SELECT ?sede ?materia ' +
        'WHERE {' +
        '?s ma:TieneCarreraDe ?c.' +
        '?s ma:nombre ?sede.'  +
        '?c ma:TieneMateria ?mat.' +
        '?mat ma:nombre ?materia.' +
        '}',

        'PREFIX ma: <http://www.semanticweb.org/pc/ontologies/2020/7/untitled-ontology-10#>' +
        'SELECT ?materia ?sede ' +
        'WHERE {' +
        '?s ma:TieneCarreraDe ?c.' +
        '?s ma:nombre ?sede.' +
        '?c ma:TieneMateria ?mat.' +
        '?mat ma:nombre ?materia.' +
        'FILTER regex(?materia, "Fisica").' +
        '}',

    ];
    name1: any;
    name2: any;
    name3: any;
    name4: any;
    name5: any;
    name6:any;
    name7:any;

    ngOnInit(): void {
        this.yenaServiceService.createQuery(this.queries[0])
            .subscribe((data) => {
                this.tableColumns.forEach((value, index) => {
                    value.label = data.head.vars[index];
                    value.property = data.head.vars[index];
                });
                this.tableData = data.results.bindings;
                this.name1 = 'Las materias que se matriculó un estudiante';
            });
        this.yenaServiceService.createQuery(this.queries[1])
            .subscribe((data) => {
                this.tableColumns2.forEach((value, index) => {
                    value.label = data.head.vars[index];
                    value.property = data.head.vars[index];
                });
                this.tableData2 = data.results.bindings;
                this.name2 = 'Las materias que imparte un docente ';

            });
        this.yenaServiceService.createQuery(this.queries[2])
            .subscribe((data) => {
                this.tableColumns3.forEach((value, index) => {
                    value.label = data.head.vars[index];
                    value.property = data.head.vars[index];
                });
                this.tableData3 = data.results.bindings;
                this.name3 = 'Carreras que estudia el alumno'

            });
        this.yenaServiceService.createQuery(this.queries[3])
            .subscribe((data) => {
                this.tableColumns4.forEach((value, index) => {
                    value.label = data.head.vars[index];
                    value.property = data.head.vars[index];
                });
                this.tableData4 = data.results.bindings;
                this.name4 = 'Los estudiantes matriculados en un periodo determinado';

            });
        this.yenaServiceService.createQuery(this.queries[4])
            .subscribe((data) => {
                this.tableColumns5.forEach((value, index) => {
                    value.label = data.head.vars[index];
                    value.property = data.head.vars[index];
                });
                this.tableData5 = data.results.bindings;
                this.name5 = 'Los estudiantes matriculados en una materia con su respectivo docente';

            });
        this.yenaServiceService.createQuery(this.queries[5])
            .subscribe((data) => {
                this.tableColumns6.forEach((value, index) => {
                    value.label = data.head.vars[index];
                    console.log(value)
                    value.property = data.head.vars[index];
                });
                this.tableData6 = data.results.bindings;
                this.name6 = 'Las materías impartidas en una sede';
            });
        this.yenaServiceService.createQuery(this.queries[6])
            .subscribe((data) => {
                this.tableColumns7.forEach((value, index) => {
                    value.label = data.head.vars[index];
                    console.log(value)
                    value.property = data.head.vars[index];
                });
                this.tableData7 = data.results.bindings;
                this.name7 = 'La sede que pertenece a una materia determinada';
            });
    }
}
