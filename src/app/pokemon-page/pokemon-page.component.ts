import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  // Need to load relevant pokemon for page here and then pass them on to the pokemon card component in the template
  // Create service for calling the API and use service here
  // Figure out how to handle pagination, 6 or 9 pokemon per page?

  pokemonListSize: number = 151;


  constructor() { }

  ngOnInit(): void {
  }

}
