import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Ibeer } from '../interfaces/ibeer';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private apiService: ApiService) { }
  async getBeers(): Promise<Ibeer[]> {
    return await this.apiService.get();
  }
}
