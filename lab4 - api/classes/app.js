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
        this.getPokemon();
        this.getPokeImage();
        
    }
    locationFailed(err){
        console.log(err);
    }
    getWeather(){
        let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.lat}%2C%20${this.lng}?unitGroup=metric&key=7CHVDNAGSRHWQ4HVSFUJYFYUY&contentType=json`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            document.querySelector("#app").innerHTML = data.currentConditions.conditions;
            console.log(data);
        }).catch(err=>{
            console.log(err);
        });
     
    }
    getPokemon(){
        let url = `https://pokeapi.co/api/v2/type/water`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            let arraySize = data.pokemon.length;
            let randomPokemon = Math.floor(Math.random() * arraySize) + 1;
            console.log(data.pokemon[randomPokemon].pokemon.name);
            console.log(data);
        }).catch(err=>{
            console.log(err);
        });
    }
    getPokeImage(){
        let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/22.gif`;
     
    }
}