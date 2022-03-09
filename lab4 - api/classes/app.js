export default class App{
    constructor(){
        this.getLocation();
    }
    getLocation(){
        navigator.geolocation.getCurrentPosition(this.locationDone, this.locationFailed);
    }
    locationDone(result){
        console.log(result);
    }
    locationFailed(err){
        console.log(err);
    }
}