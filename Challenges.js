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
function countHours(year, holidays) {
//Here I use the .reduce() method to calculate the amount of days that each employee has to recover hours from.
  return holidays.reduce((iter, holiday)=>{
    const weekDay = new Date(`${year}-${holiday}`);
    if(weekDay.getDay()>0 && weekDay.getDay()<6){
      iter++;
    }
    return iter;
  }, 0) *2;
  //At last, I multiply the amount of days by 2 to return the hours that has to be recovered.
}
 
------------------------------------------------------------------------------------------------------
3)
function distributeGifts(packOfGifts, reindeers) {
  return Math.floor((reindeers.join('').length * 2) / packOfGifts.join('').length) ;
  //In this challenge, I used array.join() to concatenate the elements on each array, and then divide the 2 values given by each ones length
  //Math.floor() is used to round down the division
}
------------------------------------------------------------------------------------------------------
4)
