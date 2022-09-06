import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-consumindo-api',
  templateUrl: './consumindo-api.component.html',
  styleUrls: ['./consumindo-api.component.css'],
})
export class ConsumindoApiComponent implements OnInit {
  pokemon!: string;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  buscar(): void {
    this.pokemonService
      .quemEhEssePokemon(this.pokemon)
      .pipe(
        catchError(
          (error)=>{
            return of({
              error:"deu ruim"
            })
          }
        )
      )
      .subscribe((response:any) => {
        console.log("opa");
        console.log(response);
      })
  }

  teste(): void {
    this.pokemonService
      .testApiLocal()
      .pipe(
        catchError(
          (error)=>{
            return of({
              error:"deu ruim"
            })
          }
        )
      )
      .subscribe((response:any) => {
        console.log("opa");
        console.log(response);
      })
  }
}
