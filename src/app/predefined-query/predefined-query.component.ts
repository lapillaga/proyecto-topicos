import { Component, OnInit } from '@angular/core';
import {YenaServiceService} from 'src/app/services/yena-service.service';

@Component({
  selector: 'vex-predefined-query',
  templateUrl: './predefined-query.component.html',
  styleUrls: ['./predefined-query.component.scss']
})
export class PredefinedQueryComponent implements OnInit {

  constructor(private yenaServiceService: YenaServiceService) { }

  query = 'PREFIX ma: <http://www.semanticweb.org/pc/ontologies/2020/7/untitled-ontology-10#>' +
      'SELECT ?estudiante ?materia ' +
      'WHERE {' +
      '?m ma:TieneMaterias ?mat.' +
      '?mat ma:nombre ?materia.' +
      '?e ma:MatriculadoEn ?m.' +
      '?e ma:nombre ?estudiante.' +
      '}';

  ngOnInit(): void {
    this.yenaServiceService.createQuery(this.query)
        .subscribe((data) => {
          console.log(data);
        });
  }

}
