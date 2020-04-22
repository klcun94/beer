import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { Ibeer } from '../interfaces/ibeer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  message: string;
  displayedColumns: string[] = ['id', 'name', 'image_url', 'tagline', 'description', 'abv'];
  dataSource: MatTableDataSource<Ibeer>;
  constructor(private dataService: DataService) {}
  async ngOnInit() {
    this.dataSource = new MatTableDataSource(await this.dataService.getBeers());
    this.message = JSON.stringify(await this.dataService.getBeers());
  }
}
