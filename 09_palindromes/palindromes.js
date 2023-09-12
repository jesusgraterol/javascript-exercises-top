const palindromes = function (value) {
    const clean_value = value.replace(/[.,!/\s]/g, "").toLowerCase();
    return clean_value == clean_value.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
