const repeatString = function(string, num) {
let conj = '';
if(num < 0)
return "ERROR";
    for(let i = 1 ; i <= num ; ++i)
    {
      conj += string;
    }
    return conj;
};

// Do not edit below this line
module.exports = repeatString;
