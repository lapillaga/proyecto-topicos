import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icClose from '@iconify/icons-ic/twotone-close';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { YenaServiceService } from '../services/yena-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'vex-create-query',
  templateUrl: './create-query.component.html',
  styleUrls: ['./create-query.component.scss']
})
export class CreateQueryComponent implements OnInit {
  form: FormGroup;
  stateCtrl:FormControl;
  
  
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
  constructor(private yenaServiceService: YenaServiceService,
    private fb: FormBuilder
       
    ) { }

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
    this.stateCtrl = new FormControl();
    
  }

  initForm(): void {
    this.form = this.fb.group({
      query: ['']
    });
  }
  callQuery(query: string){
      this.yenaServiceService.createQuery(query)
          .subscribe((data) => {
              console.log(data);
              this.tableColumns.forEach((value, index) => {
                  value.label = data.head.vars[index];
                  value.property = data.head.vars[index];
              });
              this.tableData = data.results.bindings;
          });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.text[0];
      this.form.get('query').setValue(file);
    }
  }
  
  create(){
    this.callQuery(this.stateCtrl.value);
    
  }

}
