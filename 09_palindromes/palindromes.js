const palindromes = function (str) {

    
    let strArr = str.split('')

    let filtered = strArr.filter(char => char.match(/[a-z0-9]/i));
    str = filtered.join('').toLowerCase();
    let reversed = filtered.reverse()
                     .join('');

    return str === reversed.toLowerCase();

};

// Do not edit below this line
module.exports = palindromes;
