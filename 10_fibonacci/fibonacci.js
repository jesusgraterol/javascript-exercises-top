const fibonacci = function(val) {
    // Validate/Format the input
    if (val < 0) return "OOPS";
    if (typeof val != "number") val = Number(val)
    
    // Build the fib sequence
    let sequence = [0, 1];
    for (let i = 1; i < val; i++) {
        sequence.push(sequence.at(-2) + sequence.at(-1));
    }
    return sequence.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
