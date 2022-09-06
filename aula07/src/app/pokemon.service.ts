import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonApiUrl:string="https://pokeapi.co/api/v2/pokemon/"
  constructor(private http: HttpClient) { }


  quemEhEssePokemon(pokemon: string) {
    return this.http.get<any>(this.pokemonApiUrl + pokemon)
     
}

testApiLocal(){
  
  return this.http.get<any>("http://localhost:8080/aluno")
}
}
