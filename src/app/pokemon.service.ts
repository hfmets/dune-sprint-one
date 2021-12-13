import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from './models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseApiAddress: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get(this.baseApiAddress + id).pipe(map((res: any) => res));
  }
}
