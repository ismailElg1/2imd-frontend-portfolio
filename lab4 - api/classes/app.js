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
            console.log(response);
            response.json();
         
        }).then(data => {
            console.log(data);
        }).catch(err=>{
            console.log(err);
        });
        console.log();
    }
}