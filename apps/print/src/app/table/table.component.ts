import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { Fruit, Fruits } from "./fruits.model";

@Component({
    selector: 'print-workspace-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    @Input()
    data: Fruits;

    @Input()
    columns: string[];

    dataSource: DataSource<Fruit>

    ngOnInit() {
       this.dataSource = new MatTableDataSource(this.data);
    }
}