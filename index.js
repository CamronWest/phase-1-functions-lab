const { returnStatement } = require("babel-types");
const one_block = 43;

function distanceFromHqInBlocks (value){
    
    if(value == 43){
        return 1;
    } else {
        return 8;
    }
}

function distanceFromHqInFeet(value){
    if(value == 43){
        return 264;
    } else {
        return 2112;
    }
}

function distanceTravelledInFeet(start, end){
    if (start > end){
        return ((start-end)*264);
    } else {
        return ((end-start)*264);
    }
}

function calculatesFarePrice(start, destination){
    if ((distanceTravelledInFeet(start,destination)) <= 400){
        return 0;
    } else if ((distanceTravelledInFeet(start, destination)) > 400 && (distanceTravelledInFeet(start, destination))< 2000){
        return ((distanceTravelledInFeet(start,destination)-400)*.02);
    } else if ((distanceTravelledInFeet(start,destination)) > 2000 && (distanceTravelledInFeet(start,destination)) < 2500){
        return 25;
    } else {
        return "cannot travel that far"
    }
}

console.log(calculatesFarePrice(34,32))