const readFile = require('./readFile');
const args = process.argv;

//Get location of file input
const file = args[2];

if(file){

   readFile.getParseData(file).then((drivers)=> {

       drivers.forEach((driver)=>{
           driver.calculateTrips()
       });

       //Sort drivers by distance
       drivers.sort((a, b) => b.total_distance - a.total_distance);

       drivers.forEach((driver)=>{
           if(driver.total_distance > 0) {
               console.log(`${driver.name}: ${driver.total_distance} miles @ ${driver.average_speed} mph`);
           }else{
               console.log(`${driver.name}: ${driver.total_distance} miles`)
           }
       });

   })

}else
{
    console.log(`There's no file input`)
}





