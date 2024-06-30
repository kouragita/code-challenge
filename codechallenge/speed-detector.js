
// Write a program that takes the speed of a car as input e.g 80. 
// If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), 
// it should give the driver one demerit point and print the total number of demerit points.

//    > For example, if the speed is 80, it should print: “Points: 2”. 
//    If the driver gets more than 12 points, the function should print: “License suspended”.


//define's global constants

const speedLimit = 70;
const kmPerDemeritPoint = 5;

function isSpeed(speed){
    //check if speed is less than speed limit
    if (speed <= speedLimit){
        console.log("OK");
        return;
    }
     //calculate the no.of demerit points
    const demeritPoints = Math.floor((speed - speedLimit)/ kmPerDemeritPoint);

    //check if demeritpoints exceed 12
    if(demeritPoints > 12){
        console.log("license suspended");
    }
    else{
        console.log("points " + demeritPoints)
    }
}

isSpeed(90)