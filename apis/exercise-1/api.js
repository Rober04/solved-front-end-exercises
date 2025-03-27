class PokemonError extends Error{
    constructor(message){
        super(message);
        this.name = "PokemonError";
    }
}
class TestFetch{

    constructor(){
    }

    async createFetch(url) {
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new PokemonError("Error while trying to fetch, invalid URL");
            }
            const data = await response.json();
            
            return data;
        }
        catch(PokemonError){
            return PokemonError;
        }
    }

    async useFetch(url){
        const fetchResult = await this.createFetch(url);
        console.log(fetchResult);
    }
}

const pokemon = new TestFetch();
const ditto = pokemon.useFetch("https://pokeapi.co/api/v2/pokemon/ditto");

console.log(ditto);