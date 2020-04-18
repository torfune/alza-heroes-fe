import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://209.250.233.140';

export interface Hero {
  _id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getHeroesList() {
    return this.http.get<Hero[]>(`${BASE_URL}/heroes`);
  }

  createHero(name: string) {
    return this.http.post<Hero>(`${BASE_URL}/heroes`, { name });
  }
}
