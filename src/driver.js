
class Driver {

    constructor(name){
        this.name = name;
        this.trips = [];
        this.total_distance = 0;
        this.average_speed = 0;
    }


    [Symbol.iterator]() {
        return this.trips.values()
    }

    addTrip(trip)
    {
        this.trips.push(trip)
    }


    /*
     * Takes in time in minutes and distance in miles and returns miles/hour
     */
    static getRate(time,distance){

        return Math.round((distance/(time/60)))
    }

    /*
     * Calculates time difference in minutes and returns null if time is negative. Which means
     * time would loop around
     */
    static calculateTimeDif(time_start,time_stop){
        let time;
        let time_start_mins = time_start.split(':');
        let time_stop_mins = time_stop.split(':');

        time = (parseInt(time_stop_mins[0]*60)+parseInt(time_stop_mins[1]))-(parseInt(time_start_mins[0]*60)+parseInt(time_start_mins[1]));

        if(time < 0){
            return null
        }
        return time
    }

     static calculateRate(time_start,time_stop,distance){

        let time = Driver.calculateTimeDif(time_start,time_stop);

        if(time === null)
        {
            return null
        }
        return Driver.getRate(time,distance)

    }

    //Filter out the unnecessary trips
    filterTrips(){

        this.trips.forEach((trip,pos) =>{

            let rate = Driver.calculateRate(trip.time_start,trip.time_stop,trip.distance_traveled);

            if(rate < 5 || rate > 100 || rate === null){
                //Remove from position
                this.trips.splice(pos,1)
            }

        });
    }

    // Returns the total taken
    calculateTrips(){

        this.filterTrips();
        let sum_distance = 0;
        let sum_time = 0;

        this.trips.forEach((trip) =>{
            sum_distance += parseFloat(trip.distance_traveled);
            sum_time += Driver.calculateTimeDif(trip.time_start,trip.time_stop);
        });

        if(sum_distance > 0 && sum_time > 0) {
            this.average_speed = Driver.getRate(sum_time, sum_distance);
            this.total_distance = Math.round(sum_distance);
        }
    }

}

module.exports = Driver;