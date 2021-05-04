import PokeAPI from '@/services/pokedex';
import state from './state';
import mutations from './mutations';

export default {
    async getPokemons(){
        const {
            setList,
            setIsPokemonSearch,
            setListHasError,
            setListHasNext,
            setListHasCompleted,
            updateOffset,
        } = mutations;

        try{
            setIsPokemonSearch(false);
            setListHasError(false);

            const pokemonsList = await PokeAPI.getPokemons({limit:state.limit, offset: state.offset});

            if(pokemonsList?.results?.length){
                const prepareInfo = pokemonsList.results.map(item => PokeAPI.getPokemonsByName(item.name));
                const pokemonsInfo = await Promise.all(prepareInfo);

                setList(pokemonsInfo);
            }

            if(pokemonsList?.next){
                setListHasNext(true);
                updateOffset();
            }else{
                setListHasNext(false);
                setListHasCompleted(true);
            }

        }catch(error){
            setListHasError(true)
        }
    },

    async getPokemonsByName(name){
        const {setPokemonSearched} = mutations;

        const pokemon = await PokeAPI.getPokemonsByName(name);

        if(pokemn){
            setPokemonSearched(pokemon)
        }
    },

    async searchPokemon(name){
        const {
            setIsPokemonSearch,
            setIsSearching,
            setPokemonSearched,
            setSearchHasError,
            resetList,
        } = mutations;

        if(!name){
            resetList();
            return
        }

        try{
            setSearchHasError(false);
            setIsSearching(false);
            setIsPokemonSearch(false);

            const pokemon = state.list.find(info => info.name.toLowerCase() === name.toLowerCase());

            if(pokemon){
                setPokemonSearched(pokemon);
                return;
            }

            await this.getPokemonsByName(name);
        }catch(error){
            setSearchHasError(true);
        }finally{
            setIsSearching(false);
        }
    }
}