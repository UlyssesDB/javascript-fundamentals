function first(arr) {
    // Throw an exception if the array has no elements
    // Otherwise return the first element
    if (arr.length <= 0) { throw new Error("err");}
    else {return arr[0];}
}

function detective(i) {
    function suspect(i) {
        if(i * 7 % 3 == 0) {
            throw new Error("Bad i!");
        }
    }
    if (i * 7 % 3 == 1) {return "everything ok";}
    if (i * 7 % 3 == 0) {return "something fishy";}
}

function assignFlight(name) {
    var flightNumber = ((name.length * 7) % 20) + "0";
    var terrorSuspects = ["bob", "eric", "susie"];
    // if the name is a terror suspect, throw an exception
    // Otherwise, return the flight number
    for (var i = 0; i < terrorSuspects.length; i++) {
        if (terrorSuspects[i] === name) { throw new Error("Suspect identified"); }
        else { return flightNumber; }
    }
}

module.exports = {first, detective, assignFlight}