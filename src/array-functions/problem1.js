function removeEvens(lst) {
    // lst is an array of numbers
    // Returns a new list with all the even numbers of lst removed
    var newArr = lst.filter(function(a){ return a%2 !== 0; });
    return newArr;
}

function keepLong(lst) {
    // lst is an array of strings
    // Returns a new list with all the elements of lst that are length greater than 5
    var newArr = lst.filter(function(a){return a.length > 5;});
    return newArr;
}

function greet(lst) {
    // lst is an array of strings
    // Adds "Hello " to every element of greet
    // For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
    var newArr = lst.map(function(a){return "Hello " + a});
    return newArr;
}

function greetLong(lst) {
    // lst is an array of strings
    // Only greet people who's names have length at least 4.
    // Otherwise ignore them completely.
    // For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
    var newArr = lst.filter(function(a){return a.length > 3;});
    var newArr1 = newArr.map(function(a){return "Hello " + a});
    return newArr1;
}

function allLong(lst) {
    // lst is an array of strings
    // Returns true if every element of lst is of length at least 5. Otherwise returns false.
    var newArr = lst.filter(function(a) {return a.length >= 5;});
    console.log(newArr);
    if (newArr.length == lst.length) { return true; }
    else { return false; }
}

module.exports = {removeEvens, keepLong, greet, greetLong, allLong};