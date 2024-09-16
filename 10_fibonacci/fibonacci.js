const fibonacci = function(num) {


    if (num < 0)
    {
        return "OOPS";
    }
    let feb = [1, 1];

    for (let i = 2; i <= num; i++)
    {
        feb[i] = feb[i - 1] + feb[i - 2];
    }

    return feb[num - 1];
}; 

// Do not edit below this line
module.exports = fibonacci;
