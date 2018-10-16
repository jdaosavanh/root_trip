const fs = require('fs');
const readline = require('readline');
const driver = require('./driver');
const trip = require('./trip');


/*
 * Takes in file and returns a promise that will contain an array of each line
 */
readFilePromise = (file) => {

  return new Promise((resolve,reject) => {

        var inputs = [];
        var rl = readline.createInterface({
            input: fs.createReadStream(file),
            console: false
        }); // provide correct file path

        rl.on('line', function (line) {
            inputs.push(line);
        })
            .on('close', function() {
                resolve(inputs);
            })
            .on('error', function (e) {
                console.log("error", e);
                reject(Error(e));
            });
    });

};

/*
 * Takes in an array of each line and parses into driver and their trips
 */

parseData = (lines) => {
    let drivers = [];

    lines.forEach((line,pos) => {

        let input = line.split(/[ ]+/);

        //Make input not case proof
        if(input[0].toLowerCase() === "driver"){

            //Check if input has line has enough commands

            if(input.length >= 2){
                let newDriver = new driver(input[1]);

                if (input[1]){

                    drivers.push(newDriver);

                } else
                {
                    console.log(input[1] + " is bad");
                }
            }else
            {
                console.log(`line ${pos} doesn't have enough inputs`);
            }

        }
        else if(input[0].toLowerCase() === "trip"){

            if(input.length >= 5){
                let driver = drivers.find(driver => driver.name === input[1]);
                let newtrip = new trip(input[2], input[3], input[4]);

                if (driver && newtrip){
                    driver.addTrip(newtrip);
                }
            }else
            {
                console.log(`line ${pos} doesn't have enough inputs`);
            }

        }else
        {
            console.log(input[0]+" is not a command");
        }

    });

    return drivers;
};

/*
 * Returns a promise of the parsed data.
 */

getParseData = (file) => {

    return new Promise((resolve,reject) => {

        readFilePromise(file).then((lines) => {

            let data = parseData(lines);

            if(data){
                resolve(data);
            }else{
                reject('Error');
            }

        });
    });


};


module.exports = {
    getParseData
};