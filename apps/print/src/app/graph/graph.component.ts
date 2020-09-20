import { Component, Input, OnInit, AfterViewInit } from "@angular/core";
import { Options } from "highcharts";
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'print-workspace-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

    @Input()
    options: Options;
    chart: Chart;

    ngOnInit() {
        this.chart = new Chart(this.options);
    }
}