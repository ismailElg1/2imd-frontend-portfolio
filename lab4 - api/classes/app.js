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
            document.querySelector("#message").innerHTML = "Consider catching this pokemon";
            console.log(data);
        }).catch(err=>{
            console.log(err);
        });
     
    }
    getPokemon(){
        let url = `https://pokeapi.co/api/v2/pokemon?limit=500`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            let arraySize = data.results.length;
            let randomPokemon = Math.floor(Math.random() * arraySize) + 1;
        
            console.log(data);
            this.getPokeImage(randomPokemon);
        }).catch(err=>{
            console.log(err);
        });
    }
    getPokeImage(pokemon){
        let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon}.gif`;
        document.querySelector("#pokemon").src = url;
    }
}