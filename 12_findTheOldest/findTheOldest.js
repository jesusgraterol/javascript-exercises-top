const calculateAge = (birth, death) => {
    if (death === undefined) death = new Date().getFullYear();
    return death - birth;
}
const findTheOldest = (people) => {
    return people.reduce(
        (accum, current) => {  
            if (
                calculateAge(accum.yearOfBirth, accum.yearOfDeath) > 
                calculateAge(current.yearOfBirth, current.yearOfDeath)) {
                return accum;
            } else {
                return current;
            }
        },
        {}
    );
};

// Do not edit below this line
module.exports = findTheOldest;
