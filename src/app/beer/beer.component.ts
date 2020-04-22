import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { Ibeer } from '../interfaces/ibeer';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'image_url', 'tagline', 'description', 'abv'];
  dataSource: MatTableDataSource<Ibeer>;
  count = 26;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private dataService: DataService) {}
  async ngOnInit() {
    this.dataSource = new MatTableDataSource(await this.dataService.getBeers());
    this.dataSource.sort = this.sort;
  }
  async addBeer() {
    this.dataSource = new MatTableDataSource(await this.dataService.update(this.count++));
    this.dataSource.sort = this.sort;
  }
}
