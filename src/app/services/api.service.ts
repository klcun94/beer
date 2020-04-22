import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ibeer } from '../interfaces/ibeer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BEER_URL = 'https://api.punkapi.com/v2/beers';
  constructor(private httpClient: HttpClient) { }
  async get(): Promise<Ibeer[]> {
    return this.httpClient.get<Ibeer[]>(this.BEER_URL).toPromise();
  }
  async getCount(path) {
    return await this.httpClient.get<Ibeer[]>(this.BEER_URL + path).toPromise();
  }
}
