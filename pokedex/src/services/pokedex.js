import axios from '@/axios';

const getPokemons = ({ limit = 25, offset = 0 }) => axios.get(`/pokemon?limit=${limit}&offset=${offset}`);

const getPokemonsByName = name => axios.get(`/pokemon/${name}`);

export default{
    getPokemons,
    getPokemonsByName,
}