const removeFromArray = function(userArr, ...args) {
 
  for(let i = userArr.length - 1; i >= 0; i--)
  {
   for(let j = 0; j < args.length; j++)
    {
      if(userArr[i] === args[j])
         userArr.splice(i, 1);
    }
  }
     
  
    return userArr;
};

// Do not edit below this line
module.exports = removeFromArray;
