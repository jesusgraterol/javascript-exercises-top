const repeatString = function(str_text, repeat_times) {
    return repeat_times >= 0 ? 
        Array(repeat_times).fill(str_text).join(""):
        "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
