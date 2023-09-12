const getTheTitles = function(books) {
    return books.reduce((accum, current) => accum.concat(current.title), []);
};

// Do not edit below this line
module.exports = getTheTitles;
