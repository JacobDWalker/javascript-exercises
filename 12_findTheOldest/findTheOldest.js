const findTheOldest = function(array) {

    return array.reduce((oldest, currentPerson) => {
        let oldestAge = getAge(oldest);
        let personAge = getAge(currentPerson);
        return personAge > oldestAge ? currentPerson : oldest;
    })
}

function getAge(person) {
    if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear();
    }
    return person.yearOfDeath - person.yearOfBirth;
}


// Do not edit below this line
module.exports = findTheOldest;

