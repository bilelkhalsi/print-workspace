import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';
import stock from 'highcharts/modules/stock.src';
import { GraphComponent } from './graph.component';


export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}

@NgModule({
  imports: [CommonModule, ChartModule],
  declarations: [GraphComponent],
  exports: [GraphComponent],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules } // add as factory to your providers
  ],
})
export class GraphModule {}
