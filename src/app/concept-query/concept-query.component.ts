import { Component, OnInit } from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icClose from '@iconify/icons-ic/twotone-close';
import {Observable} from 'rxjs';
import {CountryState} from 'src/app/models/country-state';
import {stagger80ms} from 'src/@vex/animations/stagger.animation';
import {scaleIn400ms} from 'src/@vex/animations/scale-in.animation';
import {fadeInRight400ms} from 'src/@vex/animations/fade-in-right.animation';
import {fadeInUp400ms} from 'src/@vex/animations/fade-in-up.animation';
import {YenaServiceService} from 'src/app/services/yena-service.service';

export class ConceptInfo {
  type: string;
  value: string;
  name: string;

  constructor(value) {
    this.value = value.value;
    this.type = value.type;
    this.name = this.splitText(value.value);
  }

  splitText(valor: string){
    return valor.split('#')[1];
  }
}

@Component({
  selector: 'vex-concept-query',
  templateUrl: './concept-query.component.html',
  styleUrls: ['./concept-query.component.scss'],
  animations: [
    stagger80ms,
    scaleIn400ms,
    fadeInRight400ms,
    fadeInUp400ms
  ]
})
export class ConceptQueryComponent implements OnInit {

  conceptsQuery = `prefix owl: <http://www.w3.org/2002/07/owl#>SELECT DISTINCT ?class ?label ?description WHERE {?class a owl:Class.}`;

  stateCtrl: FormControl;
  filteredStates$: Observable<ConceptInfo[]>;

  states: ConceptInfo[] = [];

  icClose = icClose;
  icArrowDropDown = icArrowDropDown;

  members: ConceptInfo[] = [];
  objectsProperties: any[] = [];
  dataProperties: any[] = [];

  constructor(private yenaService: YenaServiceService) { }

  ngOnInit() {
    this.stateCtrl = new FormControl();
    this.yenaService.createQuery(this.conceptsQuery)
        .subscribe((data) => {
          const results = data.results.bindings;
          results.forEach((value) => {
            this.states.push(new ConceptInfo(value.class));
          });
        });
    this.filteredStates$ = this.stateCtrl.valueChanges.pipe(
        startWith(''),
        map(state => state.name ? this.filterStates(state) : this.states.slice())
    );
  }

  filterStates(name: string) {
    return this.states.filter(state =>
        state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selectConcept(event){
    this.searchMembers(event.value);
    this.searchObjectProperties(event.value);
    this.searchDataProperties(event.value);
  }

  searchMembers(concept: string){
    const query = `
    PREFIX ma: <http://www.semanticweb.org/pc/ontologies/2020/7/untitled-ontology-10#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    SELECT ?x
    WHERE { ?x rdf:type ma:${concept} }
    `;
    this.yenaService.createQuery(query)
        .subscribe((data) => {
          this.members = [];
          const results = data.results.bindings;
          results.forEach((value) => {
            this.members.push(new ConceptInfo(value.x));
          });
        });
  }

  searchObjectProperties(concept: string){
    const query = `
    PREFIX ma: <http://www.semanticweb.org/pc/ontologies/2020/7/untitled-ontology-10#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    SELECT DISTINCT ?property ?range
    WHERE {
      ?es a ma:${concept} .
      ?property rdf:type owl:ObjectProperty .
      ?es ?property ?value .
      ?property rdfs:range ?range .
    }
    `;
    this.yenaService.createQuery(query)
        .subscribe((data) => {
          this.objectsProperties = data.results.bindings;
        });
  }

  searchDataProperties(concept: string){
    const query = `
    PREFIX ma: <http://www.semanticweb.org/pc/ontologies/2020/7/untitled-ontology-10#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    SELECT DISTINCT ?property ?range
    WHERE {
      ?es a ma:${concept} .
      ?property rdf:type owl:DatatypeProperty .
      ?es ?property ?value .
      ?property rdfs:range ?range .
    }
    `;
    this.yenaService.createQuery(query)
        .subscribe((data) => {
          this.dataProperties = data.results.bindings;
        });
  }

  splitText(valor: string){
    return valor.split('#')[1];
  }
}
