import axios from 'axios';
import { Pokemon } from '../interfaces';
export const getPokemon = async( pokemonId: number): Promise<Pokemon> => {
    // console.log('Pokemon');
    // if (true) throw new Error('Error en getPokemon');

    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    //en vez de resp y luego resp.data del objeto que devuelve me quedo sólo con {data}
    //console.log(resp.data.abilities[0].ability.name);
    return data;
}