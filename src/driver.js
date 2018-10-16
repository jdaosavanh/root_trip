
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
    static getRateMPH(time, distance){
        return Math.round((parseFloat(distance)/(parseFloat(time)/60)))
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

    /*
     * Takes in start time, end time and distance (miles) and calculates miles per hour
     * Will return null if time is over 24 hours or negative
     */
     static calculateRate(time_start,time_stop,distance){

        let time = Driver.calculateTimeDif(time_start,time_stop);

        //shouldn't been more than 24 hours
        if(time === null || time > (24*60))
        {
            return null
        }
        return Driver.getRateMPH(time,distance)

    }

    //Filter out the unnecessary trips
    filterTrips(){

        for(let i = 0; i < this.trips.length; i++){
            let rate = Driver.calculateRate(this.trips[i].time_start,this.trips[i].time_stop,this.trips[i].distance_traveled);
            if(rate < 5 || rate > 100 || rate === null){
                //Remove from position and offset index
                this.trips.splice(i--,1);

            }
        }
    }

    // Calculate and set the average speed and total distance
    calculateTrips(){

        this.filterTrips();
        let sum_distance = 0;
        let sum_time = 0;

        this.trips.forEach((trip) =>{
            sum_distance += parseFloat(trip.distance_traveled);
            sum_time += Driver.calculateTimeDif(trip.time_start,trip.time_stop);
        });

        if(sum_distance > 0 ) {
            this.average_speed = Driver.getRateMPH(sum_time, sum_distance);
            this.total_distance = Math.round(sum_distance);
        }
    }

}

module.exports = Driver;