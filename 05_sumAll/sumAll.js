const sumAll = function(start, end) {
    // Validate the input
    if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number") return "ERROR"; 

    // Initialize the sum
    let sum = 0;

    /**
     * For this approach to work, the start must be less than the end, if this is not the case,
     * flip the values.
     */
    const real_start = start < end ? start: end;
    const real_end = start < end ? end: start;

    // Iterate over the values
    for (let i = real_start; i <= real_end; i++) sum += i;

    // Finally, return the result
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
