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

//Another solution (taken from the midudev community):

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
  //First we check that the array doesn't has the max value in the first or the last position. 
   //And then we check that every element fits a condition depending on it's index.
   return ![heights.at(0), heights.at(-1)].includes(max) &&
    heights.every((value, index)=>{
    return ( index === 0 || 
    ((index <= heights.indexOf(max) && value >= heights[index-1]) || 
    (index > heights.indexOf(max) && value <= heights[index-1])))
  })
}

//Another solution(taken from the midudev community):

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
--------------------------------------------------------------------------------------------------------------------------
13)
function getFilesToBackup(lastBackup, changes) {
  //First filter the ids considering the timestamp value and sort the resulting array 
  
    const sortedIds = changes.reduce((result, value)=>{
      if(value[1] > lastBackup) result.push(value[0])
      return result
    }, []).sort((a,b)=>  a - b)
  
  //... new Set() returns an array with no duplicates
  return [...new Set([...sortedIds])]
}
-------------------------------------------------------------------------------------------------------------------------
 14)
 function getOptimalPath(path) {
  //This is a recursive problem we can think of the path as a binary three
  const calculateTime = (pyramid, pos)=>{
    //If the path has no root, we return 0
    if(pyramid.length === 0) return 0
    //We calculate the sum between the left leaf and the actual root
    const samePos = pyramid[0][pos] + calculateTime(pyramid.slice(1), pos)
    
    //We calculate the sum between the right leaf and the actual root
    const changePos = pyramid[0][pos] + calculateTime(pyramid.slice(1), pos+1)

    //Return the minimun of both calculations
    return Math.min(...[samePos, changePos])
  }
  const time = calculateTime(path, 0)

  return time
}
----------------------------------------------------------------------------------------------------------------------
15)
// I couldn't solve this challenge on my own so I used this solutions given by a member of the discord community
function decorateTree(base) {
 //set the default decors
  const decors = ['B', 'P', 'R'];
 //Split the string into an array. This array is put inside another, so we can have the base already put in the first position
  let tree = [base.split(' ')];
 
  [...tree[0]].slice(1).forEach((_,i) => {
    tree.push(
      [...tree[i]].slice(1)
        .map((item, index) => 
          item === tree[i][index] ? 
            item : 
            decors.find(d => d != item && d != tree[i][index])
        )
    )
  })

  return tree.reverse().map(t => t.join(' '))
}
------------------------------------------------------------------------------------------------------------------------
16)
// I couldn't solve this challenge on my own so I used this solutions given by a member of the discord community
// This one was especially hard for me because I didn't knew RegEx (not only in javascript)
function fixLetter(letter) {
  return letter
    // Questions must only end with a question mark
    .replace(/\?+/g, "?")
    .replace(/\!+/g, "!")
    // Remove spaces before comma or point
    .replace(/(\s+([,.?!]))/g,(m, $1, $2) => $2)
    // Leave a space after each comma and point
    .replace(/(^|[,.!?]+)([a-zA-Z])/g, (m, $1, $2) => `${$1} ${$2}`)
    // The first letter of each sentence must be capitalized
    .replace(/(^|[.!?]\s+)([a-z])/g, (m, $1, $2) => $1 + $2.toUpperCase())
    // Remove multiple spaces and leave only one
    .replace(/\s+/g, " ")
     // Put the word "Santa Claus" in uppercase if it appears in the letter
    .replace(/(santa claus)/gi, 'Santa Claus')
    // Remove spaces at the beginning and end of the phrase
    .trim()
    .replace(/(^[a-z])/g, (m, $1) => $1.toUpperCase())
    // Put a point at the end of the sentence if it does not have punctuation
    .replace(/([A-z])$/, (m, p) => `${p}.`)
}
------------------------------------------------------------------------------------------------------------------------
17)
function carryGifts(gifts, maxWeight) {

  let bags = []

  gifts.forEach(gift =>{
    //If bags contains an element and the bags last element length + the gift length <= maxWeight we add that gift to the last element
    if(bags.at(-1) && 
    bags.at(-1).replaceAll(' ', '').length + gift.length <= maxWeight){
      bags[bags.length -1] += ` ${gift}` 
      //This return stops the execution
      return 
    }
    
    if(!bags.at(-1) && gift.length <= maxWeight || gift.length <= maxWeight){
      bags.push(gift)
    } 
  })

  return bags
}
-----------------------------------------------------------------------------------------------------------------------
 18)
 function dryNumber(dry, numbers) {  
  const barrcodes = []

  for(let i = 1; i <= numbers; i++){
    if(Math.abs(i).toString().includes(dry)){
      barrcodes.push(i)
    }
  }

  return barrcodes
}
------------------------------------------------------------------------------------------------------------------------
19)
function sortToys(toys, positions) {
  //Create an array of the positions sorted
  const posSorted = [...positions].sort((a,b)=> a-b)
  //Return an array of toys ordered by the position of the ordered positions
  return [...Array(positions.length)].reduce(
    (accumulator, _, index) =>{
      accumulator.push(toys[positions.indexOf(posSorted[index])])
      return accumulator
    }, []
  )
}
----------------------------------------------------------------------------------------------------------------------
20)
function howManyReindeers(reindeerTypes, gifts) {
  //Order the reindeers array by descending order
  reindeerTypes.sort((a,b)=> b.weightCapacity - a.weightCapacity )

  return gifts.reduce(
    //The use of destructuring assignment it's really helpfull
    (accumulator, {country, weight})=>{
      //Find the first rindeer that can carry gifts to the country
      let index = reindeerTypes.findIndex(r =>
       r.weightCapacity < weight)
      //Calculate the maximum weight the team of rindeers can carry to the country
      let maxCapacity = reindeerTypes.reduce(
        (acc, curr) => curr.weightCapacity < weight? 
        acc += curr.weightCapacity : acc += 0, 
        0
      )
      
      const reindeersAv = []

      while(weight > 0){
        //Calculate the quantity of that certain type of reindeer by dividing the weight and the maximum weight the team can carry
        const number = Math.floor(weight / maxCapacity)
        //substract the reindeer weight from the maximum capacity
        maxCapacity -= reindeerTypes[index].weightCapacity
        //Substract the total weight the reindeer carries from the weight of the country
        weight -= number * reindeerTypes[index].weightCapacity
        reindeersAv.push({type: reindeerTypes[index].type, num: number})
        //Go to the next reindeer
        index++
      }

      accumulator.push({
        country: country,
        reindeers: reindeersAv
      })
      return accumulator
    }, []
  )
}

----------------------------------------------------------------------------------------------------------------------
21)
function printTable(gifts) {
  //calculate the maximum between 4 (gift word length) and all the names on the array
  const maxLengthGift = Math.max.apply(
    Math, [4, ...gifts.map(g => g.name.length)])
  //calculate the maximum between 8 (quantity word length) and all the names on the array
  const maxquantityGift = Math.max.apply(
    Math, [8, ...gifts.map(g => g.quantity.toString().length)])
  
  const topBottom = maxLengthGift + maxquantityGift + 7
  const table = []

  //Push the top of the table
  table.push('+'.repeat(topBottom) + '\n')

  //Push the header of the table. 
  //When you use the || operator like this, if the first expression is truthy the first expression is returned, else the second expression is returned
  table.push('| Gift' + ' '.repeat(maxLengthGift - 'gift'.length || 0)
  + ' | Quantity' + ' '.repeat(maxquantityGift - 'quantity'.length || 0)
   + ' |\n')
  table.push('| ' + '-'.repeat
  (maxLengthGift) + ' | ' + '-'.repeat(maxquantityGift) + ' |\n')

  //Push each gift name and quantity 
  gifts.forEach( gift =>{
    table.push('| ' + gift.name + 
    ' '.repeat(maxLengthGift - gift.name.length) + ' | ' + gift.quantity + 
    ' '.repeat(maxquantityGift - gift.quantity.toString().length)+ ' |\n')
  })
  //Push the bottom of the table
  table.push('*'.repeat(topBottom))
  return table.join('')
}
----------------------------------------------------------------------------------------------------------------------
22)
function checkStepNumbers(systemNames, stepNumbers) {
  let result = true
  //If the array returned from systemNames.slice() is empty or doesn't contains the actual name, the index returns -1.
  //That's why we add index to that count, because we want to campare it to itself if it's the last occurence of that name
  stepNumbers.forEach(
    (number, index)=>{
      //If result is false, we don't need to keep checking the numbers value 
      if(result && number <= stepNumbers[index + 
      systemNames.slice(index + 1).indexOf(systemNames[index]) + 1]
      ) result = true
      else result = false
    }
  )
  return result
}
----------------------------------------------------------------------------------------------------------------------
23)
function executeCommands(commands) {
  let registers = [0, 0, 0, 0, 0, 0, 0, 0]
  let values = []
  let comm = []
  let i = 0

  while( i < commands.length){
   //Split the command by a space, we get an array with the command itself and the values
    comm = commands[i].split(/ /g)
   //Split the values (if there's only one, nothing happens)
    values = comm[1].split(/,/g)
    switch (comm[0]){
      case 'MOV':
      //Check if we are trying to copy a value from another register or setting a new value for the register
        if(values[0].includes('V')){
          registers[parseInt(values[1][2])] = 
          registers[parseInt(values[0][2])]
        }else registers[parseInt(values[1][2])] = parseInt(values[0])
      break
      case 'ADD':
        registers[parseInt(values[0][2])] += 
        registers[parseInt(values[1][2])]
      break
      case 'DEC':
        registers[parseInt(values[0][2])]--
      break
      case 'INC':
        registers[parseInt(values[0][2])]++
      break
      case 'JMP':
        if(registers[0] > 0) i = values[0] - 1
      break
    }
    i++
  }
 //This map solves the problem of having to use an 8 bit cpu (the values can only be between 0-255)
  return registers.map(
    (reg)=>{
      if(reg > 255) return reg - 256
      else if(reg < 0) return reg + 256
      else return reg
    }
  )
}
----------------------------------------------------------------------------------------------------------------------
24)
function canExit(maze) {
  const canExitFrom = (x, y)=> {
    if (x < 0 || x >= maze.length || 
      y < 0 || y >= maze[x].length || maze[x][y] === "W") return false
   
    //If the 'E' is reached there's a possible way out
    if (maze[x][y] === "E")  return true
   
     maze[x][y] = "W";
    //Ask if you can exit in any direction (left, right, up and down)
    return (canExitFrom(x + 1, y) ||
      canExitFrom(x - 1, y) ||
      canExitFrom(x, y + 1) ||
      canExitFrom(x, y - 1))
  }
  //The .some() method asks if any of the rows has an exit(since the S only starts in the first row, the method is only executed one time)
  return maze.some((row, index) => canExitFrom(index, row.indexOf("S")));
}
