function wakeDog(dogName, dogBreed) {
    var r = `Wake ${dogName} the ${dogBreed}`;
    console.log(r)
    return r;
}

function leashDog(dogName, dogBreed) {
    var r = `Leash ${dogName} the ${dogBreed}`;
    console.log(r);
    return r;
}

function walkToPark(dogName, dogBreed) {
    var r = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(r);
    return r;
}

function throwFrisbee(dogName, dogBreed) {
    var r = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(r);
    return r;
}

function walkHome(dogName, dogBreed) {
    var r = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(r);
    return r;
}

function unleashDog(dogName, dogBreed) {
    var r = `Unleash ${dogName} the ${dogBreed}`;
    console.log(r);
    return r;
}

const routine = [wakeDog, 
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
];

function exerciseDog(dogName, dogBreed) {
    let arr = [];
    for (let i = 0; i < routine.length; i++) {
        arr.push(routine[i](dogName, dogBreed));
    }
    return arr;
}