// import { getPokemon } from './generics/getpokemon';

// //console.log( getPokemon());

// getPokemon(4)
//     .then( pokemon => console.log(pokemon.sprites.front_default) )
//     .catch( error => console.error(error) )
//     .finally( () => console.log('Fin de getPokemon') )

import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('Charmander');
//(Pokemon.prototype as any).customName = 'Pikachu';   //da error porque he bloqueadoque se añadan más caracteristicas
//console.log(charmander);

//charmander.savePokemonToDB(-5000);
//charmander.savePokemonToDB(3);
//charmander.publicApi = 'https://google.com'; //aunque sea privado lo hace porque al final lo transpila a js y no tiene ese control