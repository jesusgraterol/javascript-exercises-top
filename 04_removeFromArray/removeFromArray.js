const removeFromArray = function(original, ...remove_args) {
    return original.filter((item) => !remove_args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
