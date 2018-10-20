## Problem Statement

Let's write some code to track driving history for people.

The code will process an input file. You can either choose to accept the input via stdin (e.g. if you're using Ruby `cat input.txt | ruby yourcode.rb`), or as a file name given on the command line (e.g. `ruby yourcode.rb input.txt`). You can use any programming language that you want. Please choose a language that allows you to best demonstrate your programming ability.

Each line in the input file will start with a command. There are two possible commands.

The first command is Driver, which will register a new Driver in the app. Example:

`Driver Dan`

The second command is Trip, which will record a trip attributed to a driver. The line will be space delimited with the following fields: the command (Trip), driver name, start time, stop time, miles driven. Times will be given in the format of hours:minutes. We'll use a 24-hour clock and will assume that drivers never drive past midnight (the start time will always be before the end time). Example:

`Trip Dan 07:15 07:45 17.3`

Discard any trips that average a speed of less than 5 mph or greater than 100 mph.

Generate a report containing each driver with total miles driven and average speed. Sort the output by most miles driven to least. Round miles and miles per hour to the nearest integer.

Example input:

```
Driver Dan
Driver Alex
Driver Bob
Trip Dan 07:15 07:45 17.3
Trip Dan 06:12 06:32 21.8
Trip Alex 12:01 13:16 42.0
```

Expected output:

```
Alex: 42 miles @ 34 mph
Dan: 39 miles @ 47 mph
Bob: 0 miles
```

##My process

Before any coding is written. I first look at how the data should be structured. Knowing that there are two commands
Driver and Trip. Driver will register a new Driver in the application. Trip will record a trip attributed to a driver.
Looking at this i should make a Driver class that has a constructor of name and a Trip class that has the record of a trip. If this
was modeled using a data base. Driver would have the schema of ID and Name. Trip would have the schema of ID, Driver ID, Start time,
End time, miles driven.

After I have an idea of how I want the data to be modeled.

1) Handle the command line input of the file.

2) Parse the file line by line

3) Parse the command. (handle if the command is not in the file)

4) If driver doesn't exist create a driver. (if driver exist report existing line number)

5) If trip command (check if driver exist if driver doesn't exist report it) then set the attribute values.

6) Once all the data has been parse. Now its time for computing

7) Parse time difference

8) Run calculations for each user to check if trip should be tossed

9) Run calculations to get totals miles

10) Run calculations to get average speed

11) Sort by miles driven

For testing I use mocha and chai to create a few unit test.
The latest version of node and npm should be install. The command "npm i" can be used to install mocha and chai.
"npm run test" to the the test scripts.

The code can be ran by running the app.js file with an argument of the text. EG if in root file "node src/app.js src/file/input1.txt"
