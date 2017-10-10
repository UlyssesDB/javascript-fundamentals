// Fix all the errors. It should print hello after 1 second

function shout(x) {
    console.log(x.toUpperCase());
}

setTimeout(shout("hello"), 1000);