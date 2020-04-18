import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://alza-heroes.karantesty.cz';

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

  getHeroDetail(id: number) {
    return this.http.get<Hero>(`${BASE_URL}/heroes/${id}`);
  }

  createHero(name: string) {
    return this.http.post<Hero>(`${BASE_URL}/heroes`, { name });
  }

  updateHero(id: number, name: string) {
    return this.http.patch<Hero>(`${BASE_URL}/heroes/${id}`, { name });
  }

  deleteHero(id: number) {
    return this.http.delete<Hero>(`${BASE_URL}/heroes/${id}`);
  }
}
