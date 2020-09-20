import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GRAPH_OPTIONS, TABLE_COLUMNS, TABLE_DATA } from './data.mock';

@Component({
  selector: 'print-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  readonly graph = GRAPH_OPTIONS;

  readonly tableData = TABLE_DATA;

  readonly tableColumns  = TABLE_COLUMNS;
  
  constructor() {}


}
