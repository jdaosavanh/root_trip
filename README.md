Before any coding is written. I first look at how the data should be structured. Knowing that there are two commands
Driver and Trip. Driver will register a new Driver in the application. Trip will record a trip attributed to a driver.
Looking at this i should make a Driver class that has a constructor of name and a Trip class that has the record of a trip. If this
was modeled using a data base. Driver would have the schema of ID and Name. Trip would have the schema of ID, Driver ID, Start time,
End time, miles driven.


After I have an idea of how I want the data to be modeled.
1)Handle the command line input of the file.
2)Parse the file line by line
3)Parse the command. (handle if the command is not in the file)
4) If driver doesn't exist create a driver. (if driver exist report existing line number)
5) If trip command (check if driver exist if driver doesn't exist report it) then set the
attribute values.
6)Once all the data has been parse. Now its time for computing
7)Parse time difference
8) Run calculations for each user to check if trip should be tossed
9) Run calculations to get totals miles
10)Run calculations to get average speed
11) Sort by miles driven

For testing I use mocha and chai to create a few unit test.
The latest version of node and npm should be install. The command "npm i" can be used to install mocha and chai.
"npm run test" to the the test scripts.

The code can be ran by running the app.js file with an argument of the text. EG if in root file "node src/app.js src/file/input1.txt"
