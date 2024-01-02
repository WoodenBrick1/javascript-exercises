const reverseString = function(str) {

    let arrReversed = [];
    let stringReversed = '';
    for (let i = 0; i <= str.length ; ++i)
    {
      arrReversed[str.length - i] = str.charAt(i);
    }
    for (let j = 0 ; j <= str.length; ++j)
    {
        stringReversed += arrReversed[j];
        
    }
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
