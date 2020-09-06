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

export interface ConceptInfo {
  type: string;
  value: string;
  name: string;
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

  constructor(private yenaService: YenaServiceService) { }

  ngOnInit() {
    this.stateCtrl = new FormControl();
    this.yenaService.createQuery(this.conceptsQuery)
        .subscribe((data) => {
          // let results = data.results.bindings;
          // results.forEach((d:) => {
          //   d.
          // });
          // this.states = ;
        });
    this.filteredStates$ = this.stateCtrl.valueChanges.pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
    );
  }

  filterStates(name: string) {
    return this.states.filter(state =>
        state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}
