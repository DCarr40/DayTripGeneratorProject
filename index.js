"use strict"

//let randomNum;

function randomNumberGenerator(){
   let randomNum = Math.floor(Math.random() * 3); 

    return randomNum;
}

function randomDestinationGenerator(){

    let locationID = ["Mrytle Beach", "Snow Cabin", "Grand Parents House"];
    let i = randomNumberGenerator();
    let selectedLocation = locationID[i];
    
    console.log(selectedLocation);
    return selectedLocation;
    
}

function randomRestaurantGenerator(){

    let restaurantID = ["Outback Steakhouse", "Red Robin", "Chili's"];
    let i = randomNumberGenerator();
    let selectedRestaurant = restaurantID[i];
    
    console.log(selectedRestaurant);
    return selectedRestaurant;
    
}

function randomTransportationModeGenerator(){

    let transportID = ["Car", "Airplane", "Train"];
    let i = randomNumberGenerator();
    let selectedTransport = transportID[i];
    
    console.log(selectedTransport);
    return selectedTransport;
    
}

function randomEntertainmentGenerator(){

    let entertainmentID = ["Music Concert", "Camp Fire Stories", "Karaoke"];
    let i = randomNumberGenerator();
    let selectedEntertainment = entertainmentID[i];
    
    console.log(selectedEntertainment);
    return selectedEntertainment;
    
}


let finalDestination = randomDestinationGenerator();
let finalRestaurant = randomRestaurantGenerator();
let finalTransport = randomTransportationModeGenerator();
let finalEntertainment = randomEntertainmentGenerator();

let dayTripArray = [finalDestination, finalRestaurant, finalTransport, finalEntertainment];

function reselectRandomDestination(){
    let booleanAnswer = true;

    while(booleanAnswer === true){
        console.log(dayTripArray);
        let answer = prompt("Are you satisfied with your Day Trip? Please answer yes or no");
        if(answer === "yes"){
            booleanAnswer = false;
        }
        else {
            let subBooleanAnswer = false;
            
            while(subBooleanAnswer === false){   
                let subAnswerLocation = prompt("Would you like to change your location? Please answer yes or no");
                if(subAnswerLocation === "yes"){
                    dayTripArray[0] = randomDestinationGenerator();
                    alert("Your new location is " + dayTripArray[0]);
                    subBooleanAnswer = false;
                }
                else{
                    subBooleanAnswer = true;
                }
            }
            subBooleanAnswer = false;
            while(subBooleanAnswer === false){
                let subAnswerRestaurant = prompt("Would you like to change your restaurant? Please answer yes or no");
                if(subAnswerRestaurant === "yes"){
                    dayTripArray[1] = randomRestaurantGenerator();
                    alert("Your new restaurant is " + dayTripArray[1]);
                    subBooleanAnswer = false;
                }
                else{
                    subBooleanAnswer = true;
                }
            }
            subBooleanAnswer = false;
            while(subBooleanAnswer === false){
                let subAnswerTransport = prompt("Would you like to change your transportation? Please answer yes or no");
                if(subAnswerTransport === "yes"){
                    dayTripArray[2] = randomTransportationModeGenerator();
                    alert("Your new transportation is " + dayTripArray[2]);
                    subBooleanAnswer = false;
                }
                else{
                    subBooleanAnswer = true;
                }
            }
            subBooleanAnswer = false;
            while(subBooleanAnswer=== false){
                let subAnswerEntertainment = prompt("Would you like to change your entertainment? Please answer yes or no");
                if(subAnswerEntertainment === "yes"){
                    dayTripArray[3] =randomEntertainmentGenerator();
                    alert("Your new entertainment is " + dayTripArray[3]);
                    subBooleanAnswer = false;
                }
                else{
                    subBooleanAnswer = true;
                }
            } 
            booleanAnswer = false;

            
        }
    }   
   
    return dayTripArray;

}

reselectRandomDestination();
console.log("my day trip is complete!")