import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from '../models/character';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  RAM_API = 'https://rickandmortyapi.com/api/';


  constructor(private http: HttpClient) { }

  getData(): Observable<Character[]>{
    return this.http.get<{ results: Character[] }>(`${this.RAM_API}/character/`).pipe(
      map(response => response.results.map((character: Character) => ({
        name: character.name,
        image: character.image,
      })))
    )
  }
}
