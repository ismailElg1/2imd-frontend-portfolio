export default class App{
    constructor(){
        this.getLocation();
        this.lat;
        this.lng;
    }
    getLocation(){
        navigator.geolocation.getCurrentPosition(this.locationDone.bind(this),  this.locationFailed.bind(this));
    }
    locationDone(result){
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;
        this.getWeather();
    }
    locationFailed(err){
        console.log(err);
    }
    getWeather(){
        let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.lat}%2C%20${this.lng}?unitGroup=metric&key=7CHVDNAGSRHWQ4HVSFUJYFYUY&contentType=json`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            document.querySelector("#status").innerHTML = "It's " + data.currentConditions.conditions + " Outside<br>"
            +data.currentConditions.temp+ "°C";
            let pokeType = null;
            switch(data.currentConditions.conditions){
                case "Clear": console.log("its clear right now!"); pokeType = 'normal';
                break;
                default: console.log("this is default weather");
                
            }
            this.getPokemon(pokeType);
            console.log(data);
        }).catch(err=>{
            console.log(err);
        });
     
    }
    getPokemon(pokeType){
        let url = `https://pokeapi.co/api/v2/type/${pokeType}`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            let arraySize = Math.round(data.pokemon.length);
            let randomPokemon = Math.floor(Math.random() * arraySize) + 1;
            let pokemonName = data.pokemon[randomPokemon].pokemon.name;
           console.log(pokemonName)
            console.log(data);
            this.getPokeImage(pokemonName);
            document.querySelector("#message").innerHTML = `Consider catching this ${data.name} pokemon`;
        }).catch(err=>{
            console.log(err);
        });
    }
    getPokeImage(pokemon){
        let url = `https://img.pokemondb.net/sprites/home/normal/${pokemon}.png`;
        document.querySelector("#pokemon").src = url;
    }
}