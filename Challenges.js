1)
function wrapping(gifts) {
 //In this challenge I used the .map() method to return a new array with the gifts already wrapped
 return gifts.map(gift =>{
   const paper = '*'.repeat(gift.length + 2);
    gift =  paper + "\n*" + gift + "*\n" + paper;
    return gift;
  })
}

-------------------------------------------------------------------------------------------------------
2)
 
------------------------------------------------------------------------------------------------------
3)
function distributeGifts(packOfGifts, reindeers) {
  return Math.floor((reindeers.join('').length * 2) / packOfGifts.join('').length) ;
  //In this challenge, I used array.join() to concatenate the elements on each array, and then divide the 2 values given by each ones length
  //Math.floor() is used to round down the division
}
