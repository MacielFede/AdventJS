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
  //The '...' indicates that the returned array (before the join()) uses the Array build with Array.from() 
   //This method creates an Array from a iterable object (in our case, a string which we declare in that exact moment)
  //The .from() first parameter can be an object that contains the property 'length' which defines the length of the new array
  return [
    ...Array.from({ length: size}, (v, index) => ' '.repeat(size - index - 1) + '/\\'.repeat(index+1) + '_\\'.repeat(size)),
    ...Array.from({ length: size}, (v, index) => ' '.repeat(index) + '\\/'.repeat(size - index) + '_/'.repeat(size)),
  ].join('\n');
}
 ---------------------------------------------------------------------------------------------------------------
7)
function getGiftsToRefill(a1, a2, a3) {
  //First I created an array out of the unique values of the arrays given as params of the function. 
 //Then I filtered them knowing that a unique value is the first and the last to appear on a given array
  return [...new Set(a1), ...new Set(a2), ...new Set(a3)].filter((value, index, self)=> self.lastIndexOf(value) === index && self.indexOf(value) === index)
}
-----------------------------------------------------------------------------------------------------------------
 8)
 function checkPart(part) {

//[...part] transforms the string to an array
//The .some() method checks if at least one element fits the condition. 
  //This method takes 3 parameters, one of them is the actual element, que named it '_' because we don't use it 
  return [...part].some((_, i, arr) => {
      const subArr = arr.slice(0, i).concat(arr.slice(i + 1))
      
      //At last we only need to reverse the new array and join it to convertit to a string again
      return subArr.join('') === subArr.reverse().join('')
  })
 }
------------------------------------------------------------------------------------------------------------------------
 9)
 function countTime(leds){
  //If every led is turned on I stop counting
  if (leds.every((x) => x == 1)) return 0;
  //Else, I count 7 seconds and switch all the leds that can do so
  return 7 + countTime(leds.map((led, i) => {
    if (led === 0 && leds.at(i-1) === 1) return 1;
    return led
  }));
}
------------------------------------------------------------------------------------------------------------------------
10)
 function checkJump(heights) {
  //Find the bigger value on the array
  const max = Math.max(...heights)
  
  //Split the array in two, from the first element to the bigger value index, and from the next element to the last one. 
  //Then check that every element is bigger than the previus one, except the first one and if every element is smaller than the previous one. 
  //This checks are performed respectively to each part.
  
  const up = heights.slice(0, heights.indexOf(max))
  const down = heights.slice(heights.indexOf(max) + 1)
  
  const checkUp = up.slice(1).every((element, index) =>  element >= up[index])
  const checkDown = down.slice(1).every((element, index) => element <= down[index])
  
  return down.length > 0 && up.length > 0 && checkUp && checkDown
}
-------------------------------------------------------------------------------------------------------------------------
 11)
function getCompleted(part, total) {
  //gcd it's a function to calculate the Gratest Common Divisor between two numbers, this will be usefull to simplify the fractions.
//Math.abs returns the absolute value of a number
  const gcd = (a, b)=> {
    a = Math.abs(a);
    b = Math.abs(b);
    while(b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
  //This function transforms the strings into seconds to calculate the fractions. String.split() method divides a string by a given pattern and returns it in an array.
  const toSeconds = (string) => {
    const [hh,mm,ss] = string.split(":")
    return (hh*3600)+(mm*60)+(ss*1)
  }
  const partSeconds = toSeconds(part)
  const totalSeconds = toSeconds(total)
  const partFraction = partSeconds/gcd(partSeconds, totalSeconds)
  const totalFraction = totalSeconds/gcd(partSeconds, totalSeconds)

  return `${partFraction}/${totalFraction}`
}
---------------------------------------------------------------------------------------------------------------------------
 12)
 function selectSleigh(distance, sleighs) {
  //First I reverse the array and then find the first index which element fits the condition. Since the array is already sorted I don't have to do nothing else,
  //just check that I found some index
  const bestSleighIndex = sleighs.reverse().findIndex((sleigh)=> {
    return sleigh.consumption * distance <= 20 
  })

  return bestSleighIndex != -1 ? sleighs[bestSleighIndex].name : null 
}
