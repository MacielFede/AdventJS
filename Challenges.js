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
function fitsInOneBox(boxes) {
//My initial thought was to use a variation of the bubble sort algorithm
//I ended up using .sort() method because results in a lower cyclomatic complexity and in a more maintainable code

  //After ordering the array of boxes, I check if every box fits inside the next one
  //(if the index of the box equals the length of the array-1 that means we are in the last box, therefore, every box fits inside another one)
  return boxes.sort((a,b)=> (a.l + a.w + a.h) - (b.l + b.w + b.h)).every((box, index)=>{
    return index === boxes.length-1 ||
          box.l < boxes[index + 1].l && 
          box.w < boxes[index + 1].w &&
          box.h < boxes[index + 1].h;
  })
}
--------------------------------------------------------------------------------------------------------
5)
function getMaxGifts(giftsCities, maxGifts, maxCities) {

  //This one is a tricky one, it's based on the Knapsack problem(0–1)

  const getSum = (values, gifts, cities, i)=>{
    //If I reached the maximum of gifts or the max of cities available I stop counting
    if(gifts < 0 || cities === 0) return 0
    //If the value of the array that I want to check is lower than the max amount of gifts I return the gratter number between using that value and not using it
    else if(values[i] <= gifts){
      return Math.max(values[i] + getSum(values, gifts - values[i], cities - 1, i-1), getSum(values, gifts, cities, i - 1))
    }
    //If the value is bigger than the max amount of gifts and I didn't reached the last value I drop that value and continue 
    //If I reached the end of the array return 0.
    return i > 0 ? getSum(values, gifts, cities, i - 1) : 0
  }

  return getSum(giftsCities, maxGifts, maxCities, giftsCities.length - 1)
}
-------------------------------------------------------------------------------------------------------------
6)
function createCube(size) {
  let head = ''
  let tail = ''
  for(let i = 0; i<size; i++){
    head += ' '.repeat(size - i - 1) + '/\\'.repeat(i+1) + '_\\'.repeat(size) + '\n'
    tail += ' '.repeat(i) + '\\/'.repeat(size - i) + '_/'.repeat(size) + '\n'
  }  
  
  //I delete the last \n character using .slice(0, -1).
  //-1 indicates the last position in the string
  return head.concat(tail).slice(0,-1)
}

//Another solution:
function createCube(size) {
 
 //An array is returned as a result of a .join(\n) between the top and the bottom of the cube. 
  //The '...' indicates that the returned array (before the join()) uses the Array build with Array.from() This method creates an Array from a iterable object (in our case, a string which we declare in that exact moment)
  //The .from() first parameter can be an object that contains the property 'length' which defines the length of the new array
  return [
    ...Array.from({ length: size}, (v, index) => ' '.repeat(size - index - 1) + '/\\'.repeat(index+1) + '_\\'.repeat(size)),
    ...Array.from({ length: size}, (v, index) => ' '.repeat(index) + '\\/'.repeat(size - index) + '_/'.repeat(size)),
  ].join('\n');
}
 ---------------------------------------------------------------------------------------------------------------
7)


