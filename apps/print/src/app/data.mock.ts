import { Options } from 'highcharts';
import {Fruits} from './table/fruits.model';

export const GRAPH_OPTIONS : Options = {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'Average fruit consumption during one week'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF'
    },
    xAxis: {
        categories: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ],
        plotBands: [{ // visualize the weekend
            from: 4.5,
            to: 6.5,
            color: 'rgba(68, 170, 213, .2)'
        }]
    },
    yAxis: {
        title: {
            text: 'Fruit units'
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'John',
        data: [3, 4, 3, 5, 4, 10, 12]
    }, {
        name: 'Jane',
        data: [1, 3, 4, 3, 3, 5, 4]
    }]
} as Options; 

export const TABLE_COLUMNS: string[] = ['position', 'name', 'vitamin', 'content'];

export const TABLE_DATA: Fruits = [
   {position: 1, name : 'Apricots' ,vitamin : '(A, B1, B2, B6, C)', content : '(0.2, 0.06, 0.05, 0.06, 5000)'},
   {position: 2, name : 'Apple' ,vitamin : '(A, B1, B2, B6, C)', content : '(0.005, 0.02, 0.01, 0.05, 5000)'},
   {position: 3, name : 'Banana' ,vitamin : '(A, B1, B2, B6, C)', content : '(0.008, 0.04, 0.03, 0.36, 10000)'},
   {position: 4, name : 'Blackberries' ,vitamin : '(A, B1, B2, B6, C)', content : '( 0.015, 0.08, 0.04, 0.07, 150000)'},
   {position: 5, name : 'Cherries' ,vitamin : '(A, B1, B2, B6, C)', content : '(0.012, 0.02, 0.02, 0.04, 10000)'},
   {position: 6, name : 'Grapefruit' ,vitamin : '(A, B1, B2, B6, C)', content : '(0.028, 0.07, 0.02, 0.03, 40000)'},
   {position: 7, name : 'Grapes' ,vitamin : '(A, B1, B2, B6, C)', content : '(0.005, 0.03, 0.01, 0.08, 3000)'},
   {position: 8, name : 'Kiwi' ,vitamin : '(A, B1, B2, B6, C)', content : '(0.007, 0.01, 0.02, 0.12, 70000)'},
   {position: 9, name : 'Lemon' ,vitamin : '(A, B1, B2, B6, C)', content : '(0.001, 0.06, 0.02, 0.04, 40000)'},
   {position: 10,name :  'Mango', vitamin : '(A, B1, B2, B6, C)', content : '(0.053, 0.03, 0.04, 0.04, 23000)'},
   {position: 11,name :  'Peach', vitamin : '(A, B1, B2, B6, C)', content : '(0.016, 0.01, 0.02, 0.02, 7000)'},
   {position: 12,name :  'Orange', vitamin : '(A, B1, B2, B6, C)', content : '(0.012, 0.07, 0.03, 0.06, 49000)'},
  ];  
