import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'beer';
  message: string;
  constructor(private dataService: DataService) {}
  async ngOnInit() {
    this.message = JSON.stringify(await this.dataService.getBeers());
  }
}
