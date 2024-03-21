// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo']));


console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo']));

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer;
    };
}

const fareMultiplierBy4 = createFareMultiplier(4);


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers);
}


const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 

console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 
