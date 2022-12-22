# Instructions

### First challenge

This year the elves have bought a gift wrapping machine. But... it's not programmed! We need to create an algorithm that helps it in the task.

The machine receives an array with the gifts. Each gift is a string. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

The wrapping paper is the * symbol and to wrap a gift the * symbol is placed so that it completely surrounds the string on all sides. For example:

```
    const gifts = ['book', 'game', 'socks']
    const wrapped = wrapping(gifts)
    console.log(wrapped)
    /* [
    "******\n*book*\n******",
    "******\n*game*\n******",
    "*******\n*socks*\n*******"
    ] */
```

As you can see, the wrapping paper wraps the string. On top and bottom, so as not to leave any gaps, the corners are also covered with wrapping paper.

### Second challenge

A millionaire has bought a social network and it doesn't bring good news. He has announced that each time a working day is lost due to a holiday, it will have to be compensated with two extra hours another day of the same year.

Obviously the people who work in the company have not made the slightest joke and are preparing a program that tells them the number of extra hours they would do in the year if the new rule were applied.

Since it is office work, their working hours are from Monday to Friday. So you only have to worry about the holidays that fall on those days.

Given a year and an array with the dates of the holidays, return the number of extra hours that would be done that year:
```
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, a Thursday. Count.
// 04/01 is April 1, a Saturday. Do not count.
// 12/25 is December 25, a Monday. Count.

countHours(year, holidays) // 2 days -> 4 extra hours in the year
```

### Third challenge

You are given a pack of Christmas gifts that Santa Claus wants to deliver to the children. Each gift is represented by a string. Santa Claus has a sleigh that can carry a limited weight, and each gift inside the pack has a weight that is equal to the number of letters in the gift's name.

Santa Claus also has a list of reindeer that can help him deliver the gifts. Each reindeer has a maximum weight limit that it can carry. The maximum weight limit of each reindeer is equal to twice the number of letters in its name.

Your task is to implement a function distributeGifts(packOfGifts, reindeers) that receives a pack of gifts and a list of reindeer and returns the maximum number of gifts that Santa Claus can deliver. Packs of gifts can't be splitted.

```
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributedGifts(packOfGifts, reindeers) // 2
```
Things to keep in mind:

- The pack of gifts can't be splitted.
- Gifts and reindeers names length will always be greater than 0.

### Fourth challenge

Santa Claus needs to review his gift boxes to make sure he can pack them all in his sleigh. He has a series of boxes of different sizes, characterized by their length, width, and height.

Your task is to write a function that, given a list of boxes with their sizes, determines whether it is possible to pack all the boxes in one so that each box contains another (which in turn contains another, and so on).

Each box represents its measures with an object. For example: {l: 2, w: 3, h: 2}. This means that the box has a length of 2, a width of 3 and a height of 2.

A box fits into another box if all the sides of the first are smaller than the sides of the second. The elves have told us that the boxes cannot be rotated, so you cannot put a box of 2x3x2 in a box of 3x2x2. Let's see some examples:
```
fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]) // true
```
In the previous example, the smallest box fits into the largest box. Therefore, it is possible to pack all the boxes in one. Now let's see a case that does not:
```
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

fitsInOneBox(boxes) // false
```
In the previous example, the smallest box fits into the middle box, but the middle box does not fit into the largest box. Therefore, it is not possible to pack all the boxes in one.

Note that the boxes may not come in order:
```
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

fitsInOneBox(boxes) // true
```
In the previous example, the first box fits into the third, and the third into the second. Therefore, it is possible to pack all the boxes in one.

Things to keep in mind:

- The boxes cannot be rotated because the elves have told us that the machine is not ready.
- The boxes may come in any order.
- The boxes are not always squares, they could be rectangles.

### Fifth Challenge

To not tire the reindeer, Papa Noel wants to leave the maximum number of gifts by making the least number of trips possible.

He has an array of cities where each element is the number of gifts he can leave there. For example,``[12, 3, 11, 5, 7]``. He also has a limit on the number of gifts that can fit in his bag, and finally, the maximum number of cities that his reindeer can visit.

As he doesn't want to leave a city half-way, if he can't leave all the gifts that are from that city, he doesn't leave any there.

Create a program that tells him the highest sum of gifts that he could distribute, taking into account the maximum number of gifts and the maximum number of cities he can visit. For example:
```
const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// the highest sum of gifts to distribute
// visiting a maximum of 3 cities
// is 20: [12, 3, 5]

// the highest sum would be [12, 7, 11]
// but it exceeds the limit of 20 gifts and he
// would have to leave a city half-way.

getMaxGifts(giftsCities, maxGifts, maxCities) // 20 (12 + 3 + 5)
```
If it is not possible to make any trips that satisfies everything, the result should be 0. More examples:
```
getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
getMaxGifts([50], 15, 1) // 0
getMaxGifts([50], 100, 1) // 50
getMaxGifts([50, 70], 100, 1) // 70
getMaxGifts([50, 70, 30], 100, 2) // 100
getMaxGifts([50, 70, 30], 100, 3) // 100
getMaxGifts([50, 70, 30], 100, 4) // 100
```
To consider:

- maxGifts >= 1
- giftsCities.length >= 1
- maxCities >= 1
- The number of maxCities can be greater than giftsCities.length

### Sixth challenge

A couple of Christmas enthusiasts have created a Christmas decoration company. The first decoration they want to manufacture is a cube that is placed on the trees.

The problem is that they have to program the machine and they don't know how to do it. They have asked us for help to achieve it.

To create the cubes, a number with the desired size is passed to the program and it returns a string with the design of that size. For example, if we pass a 3, the program must return a cube of 3x3x3:
```
const cube = createCube(3)

// output:
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
```
As you can see, the cube has three faces visually. The symbols used to build the cube faces are: ``/``, ``\``,``_``. In order to make the cube, some spaces are needed. Also, each line is separated by a new line character ``\n``.

Other examples of cubes:
```
const cubeOfOne = createCube(1)

// output:
/\_\
\/_/
```
```
const cubeOfTwo = createCube(2)
// output:
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
 ```
Take into account:

Pay attention to the spaces in the cube.
 - The cube has to be symmetrical.
 - Make sure you use the correct symbols.
 - Each line must be separated by a new line character \n except for the last one.

### Seventh challenge

In the Santa Claus stores they are doing inventory. There are three stores (which is represented as an Array each). In each store there are gifts.

We have been asked to write a program that tells us what gifts we have to buy to replenish our stores now that Christmas is approaching. A gift must be replenished when there is only stock in one of the three stores.

For example, if we have the following stores:
```
const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

/* The store a1 has "bike" and "car".
The store a2 has "car", "bike" and "doll".
The store a3 has "bike" and "pc".

The gift "doll" and "pc" are only in the stores a2 and a3 respectively.
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['doll', 'pc']
```
As you can see, the stores can have the same gift repeated several times. But, no matter how many existences there are in a store, if we do not have it in the other two, we must replenish it to have better distribution.

📝 To sum up
 - Create a function getGiftsToRefill that receives three Array as parameters.
 - The function must return an Array with the gifts to be replenished.
 - A gift must be replenished when there is only stock in one of the three stores.
 - If there is no gift to replenish, the function must return an empty Array.
 - If there is more than one gift to replenish, the function must return an Array with all the gifts that need to be replenished.

### Eighth challenge

Some electric sleds have broken down and the elves are looking for spare parts to fix them, but they are not sure if the parts they have are valid.

The spare parts are strings and the mechanic Elfon Masc has said that a spare part is valid if the part can be a palindrome after removing, at most, one character.

A palindrome is a word or phrase that reads the same from left to right as it does from right to left.

Our function should return a boolean that indicates whether the spare part is valid or not with that rule:
```
checkPart("uwu") // true
// "uwu" is a palindrome without removing any character

checkPart("miidim") // true
// "miidim" can be a palindrome after removing the first "i"

checkPart("midu") // false
// "midu" cannot be a palindrome after removing a character
```

### Ninth challenge 

A company that manufactures Christmas lights has asked us to help them.

They have led strips that are like an Array. Each position is a led and can be on (1) or off (0).

Every 7 seconds, the leds change state in this way:

If the led is off, it turns on if the led on its left (index - 1) was on before.
If the led is on, it remains on.
They asked us for a program that tells us how many seconds it takes for all the leds to turn on. The seconds are expressed as an integer. For example:
```
const leds = [0, 1, 1, 0, 1]
countTime(leds) // 7
// 7 seconds because in the first change
// all the lights turned on
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]) // 21
// 21 seconds because it needs three changes:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]) // 28
// 28 seconds because it needs four changes:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
```
Keep in mind
 - The array will always have at least one led on.
 - The array can have any length.
 - If all the leds are on, the time is 0.

### Tenth challenge

Create a program that checks if Santa's sleigh makes a parabola jump between cities. You receive a number array that represents the height at which the sleigh is at each moment.

For the parabola to be correct, the sleigh's trip must be ascending at the beginning and descending at the end. It cannot go up again once it has gone down, nor can it start the trip going down. Let's see some examples:
```
const heights = [1, 3, 8, 5, 2]
checkJump(heights) // true

/*
It's `true`.
The jump goes up-down.

    8 (highest point)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights = [1, 7, 3, 5]
checkJump(heights) // false

/*
It's `false`.
It goes up-down-up.

  7   5 
 ↗ ↘ ↗
1   3
```
We need the program to return a boolean that indicates whether the sleigh makes a parabola or not.

Things to keep in mind
 - The jump is valid if it goes up once and down once. If the sleigh stays at the same height between two positions, the parabola continues.
 - It is not necessary for the starting and ending points to be the same (cities can be at different heights).
 
 ### Eleventh challenge
 
 Santa Claus is a bit worried because the preparations are taking a long time. He has got a Scrum certification and has decided to use the Scrum methodology to organize the work of his elves.

The elfs tell him the expected duration of the tasks with a string with the format hh:mm:ss and in the same format how long they have been working on it.

But Santa Claus does not get quickly if there is too much or too little left to finish, so he has asked us to make a program that tells us what portion of the task has already been completed.

For example, if the task lasts 03:00:00 and they have been working for 01:00:00 then they have already completed 1/3 of the task. In code:
```
getCompleted('01:00:00', '03:00:00') // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('01:10:10', '03:30:30') // '1/3'
getCompleted('03:30:30', '05:50:50') // '3/5
```
Note:

 - The time format is hh:mm:ss.
 - The output format is a string a/b where a is the portion of the task that has already been completed and b is the portion of the task that is left to complete.
 - The portion is always shown with the smallest fraction possible. (for example, 2/4 will never be shown because it can be represented as 1/2).
 - If the task has already been completed, the fraction would be 1/1.
 - No elf has been mistreated during the execution of this challenge nor have they had to use Scrum for real.

### Twelfth challenge

Santa Claus has new electric sleighs but he must control the electricity consumption because he only has a 20W battery.

We are given an array of sleighs, from worst to best, with their respective consumptions. Each sleigh is an object with two properties: name and consumption.

The consumption field is a number that represents the amount of watts (W) that consumes the sleigh for each distance unit. The name field is a string that represents the sleigh name.

Create a program that returns the name of the best sleigh available that allows us to cover the distance.
```
const distance = 30
const sleighs = [
  { name: "Gorusuke", consumption: 0.3 },
  { name: "Madeval", consumption: 0.5 },
  { name: "Lolivier", consumption: 0.7 },
  { name: "Hyuuh", consumption: 1 }
]

selectSleigh(distance, sleighs) // => "Madeval"

// Gorusuke consumes 9W to cover 30 distance
// Madeval consumes 15W to cover 30 distance
// Lolivier consumes 21W to cover 30 distance
// Hyuuh consumes 30W to cover 30 distance

// The best sleigh to cover the distance is Madeval.

// Gorusuke covers the distance but it's a worse sleigh
// Lolivier and Hyuuh can't cover the distance with 20W.
```
Remember that:

 - The battery is always 20W.
 - The list of sleighs is ordered from worst to best sleigh.
 - You have to return the name of the best sleigh that allows us to cover the distance with the watts we have available.
 - If no sleigh can be used, then return null.
 
 ### Thirteenth challenge
 
 To avoid losing data when the server crashes, Santa Claus has decided to make incremental backups. A hacker called S4vitelf is helping him.

On one hand, we have the timestamp of when the last backup was made.

We also have the changes that have been made in an array of arrays. Each internal array contains two elements: the id of the modified file and the timestamp of the modification.

You have to create a program that returns an array with the id of the files that we would have to make backup because they have been modified since the last backup. Example:
```
const lastBackup = 1546300800

const changes = [
  [ 1, 1546300800 ],
  [ 2, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ],
  [ 3, 1546301100 ]
]

getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]
// The file with id 1 has been modified twice
// after the last backup.

// The file with id 2 has not been modified after
// the last backup.

// The file with id 3 has been modified once
// after the last backup.

// We have to make a backup
// of the files 1 and 3.
```
Remember that:

 - Returns the id of the files that have been modified after the last backup.
 - Returns an empty array if there are no files to make backup.

### Fourteenth challenge 

Santa Claus is building ice pyramids in the North Pole to train his reindeers.

Each reindeer starts at the top of the pyramid and must choose the optimal path down to travel it in the shortest time possible. Each level has a number that determines the time it takes to get there.

When arriving at a position, the reindeer can only slide down and diagonally to the left or right. Visually, the pyramid looks like this:
```
    0
   / \
  7   4
 / \ / \
2   4   6
In code we represent it like this:

[
  [0],
  [7, 4],
  [2, 4, 6]
]
```
Santa Claus needs a program that tells him what the minimum time each reindeer can take to slide down the pyramid using the optimal path.

In the previous example, the optimal path is 0 -> 4 -> 4, which takes a total of 0 + 4 + 4 = 8 units of time. The result would be: 8.

Why is it not 6? It is not 0 -> 4 -> 2 because when you go down to the position of the 4 you can no longer diagonally reach the position of the 2. So the shortest possible path is 8. More examples:
```
getOptimalPath([[0], [2, 3]]) // 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
```
To keep in mind:

 - Keep in mind that you can only go down diagonally and down from any position.
 - The first position of the pyramid can be different from 0.
 - Pyramids can have up to 10 levels.
 - The numbers in the pyramids can be negative.

### Fifteenth challenge

A couple is putting up the Christmas tree. The boy loves Christmas decorations and wants it to be perfectly balanced. He has three types of decorations:

 - Colored balls: B
 - Small gifts: R
 - Pine cones: P
 
The Christmas tree is a triangle that must be generated. They already have the base mounted, which would be the first row, and from there they have to place the decorations upwards following a formula.
```
Place on top :    P     R     B     P
If below is  :   P P   B P   R P   B R
```
The combinations are also reversed. For example, if below is B P, above is R. But it will also be R if below is P B. Also if below you have repeated the letter, above you use the same letter. For example: if below is B B, above is B.

With these rules, we could see the tree that we would generate with the base B P R P:
```
   R
  P B
 R B B
B P R P
```
Write a program that receives the string B P R P and returns an array with the representation of the tree.
```
decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

decorateTree('B B') // ['B', 'B B']
```
Keep in mind that:

 - The program always receives the text string that represents the base of the tree.
 - The tree must be generated completely, that is, the base and the rows that are generated from it, until the top.
 - You have to follow the formula to know which decoration to place in each position.

### Sixteenth challenge

Santa Claus is starting to receive a lot of letters but they have some formatting problems. To improve readability, he will write a program that given a text, formats it according to the following rules:

 - Remove spaces at the beginning and end of the prase
 - Remove multiple spaces and leave only one
 - Leave a space after each comma and point
 - Remove spaces before comma or point
 - Questions must only end with a question mark
 - The first letter of each sentence must be capitalized
 - Put the word "Santa Claus" in uppercase if it appears in the letter
 - Put a point at the end of the sentence if it does not have punctuation
 
Letters are written in English and here we have an example:
```
fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
```
Note:

 - You do not have to worry about punctuation marks other than comma, point or question mark.
 - Make sure you respect break lines and original whitespaces.

### Seventeenth challenge

We're preparing the Christmas gift bags but each bag has a weight limit.

We are given an array with the names of the gifts and a number that is the maximum weight that each bag can carry. The weight of each gift is the length of its name.

Write a function that groups the gifts in bags and returns an array with the names of the gifts of each bag. To group the gifts, the names are separated by spaces (the space does not count as weight).

But keep in mind that if the weight of the gifts of a bag exceeds the maximum weight, the last gift of the bag must be separated and placed in the next bag.
```
carryGifts(['game', 'bike', 'book', 'toy'], 10)
// ['game bike', 'book toy']
// in each bag you can carry 10kg
// the first bag carries 'game' and 'bike' which weigh 4kg and 4kg
// the second bag carries 'book' and ' toy' which weigh 4kg and 3kg

carryGifts(['game', 'bike', 'book', 'toy'], 7)
// ['game', 'bike', 'book toy']
// in each bag you can carry 7kg
// the first bag can only carry 'game' which weighs 4kg
// the second bag can only carry 'bike' which weighs 4kg

carryGifts(['game', 'bike', 'book', 'toy'], 4)
// ['game', 'bike', 'book', 'toy']
// in each bag you can carry 4kg
// each bag can only carry one gift

carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)
// ['toy', 'gamme', 'toy', 'bike']
// in each bag you can carry 6kg
// each bag can only carry one gift
// note that you can not carry 'toy toy' in a bag
// because it is not next to each other
```
Note:

 - The gifts are always grouped in the order of appearance in the array.
 - You can not change the order of the gifts in the array when grouping them.
 - All the gifts can be grouped in a single bag.
 - If you can not group any gift in a bag, an empty array is returned.

### Eighteenth challenge

We are printing barcodes for the packages. At Santa's factory we use a numbering system where each number is printed with a different ink. It's an old but reliable system. However, sometimes we run out of ink for a number.

Write a function that receives the number we don't have ink for (a number between 0 and 9) and as a second parameter, the number of barcodes to print (we start from 1 to the number we receive).

It should return an array with the numbers that include the number we don't have ink for. Let's see an example:
```
dryNumber(1, 15) // [1, 10, 11, 12, 13, 14, 15]

// we don't have ink for the number 1
// we have to print 15 barcodes from 1 to 15
// the barcodes that will be wrong because of the lack of ink are:
// 1, 10, 11, 12, 13, 14, 15

dryNumber(2, 20) // [2, 12, 20]

// we don't have ink for the number 2
// we have to print 20 barcodes from 1 to 20
// the barcodes that will be wrong because of the lack of ink are:

// 2, 12, 20
```
Keep in mind that:

 - The number we don't have ink for can only be between 0 and 9.
 - The number we don't have ink for can be in any position of the barcode.
 - The number of barcodes to print can be very large.

### Nineteenth challenge

The day is coming and Santa Claus has the toy store a mess. Help him to sort the toys in the warehouse so he can find them easier.

For this, we are given two arrays. The first is an array of toys, and the second is an array of numbers that indicate the position of each toy in the warehouse.

The only thing to keep in mind is that the positions may not start at 0, although they will always be consecutive numbers and in ascending order.

We have to return an array where each toy is in the position it corresponds to.
```
const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

sortToys(toys, positions)
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

sortToys(moreToys, morePositions)
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
```
Things to keep in mind 
 - There will always be the same number of toys as positions.
 - Neither the toys nor the positions are repeated.

### Twentieth challenge

Santa Claus has realized that even with the collaboration of all the elves he will not be able to deliver all the gifts in time. That's why he will ask for help from his friends at Autentia.

From Autentia they have indicated that they need a program to know which team of reindeer to send to each country. There are different types of reindeer and each one of them can carry a weight of gifts. For example:
```
const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]
```
In Santa Claus' list of gifts, the weight of each gift and its destination country are expressed. The weight of the gifts is always a natural number. For example:
```
const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 }
]
```
Autentia tells us that, for the team of reindeer to send to each country to be optimal, we should:

 - Send the maximum number of reindeer possible of greater load capacity
 - Make the most of the weight that each reindeer can carry.
 - The reindeer have a rather strange character and do not accept that in the team there are more reindeer of a type than reindeer of the next type in descending order of load capacity.
For example. To France (17) you would not send seventeen diesel reindeer (17 * 1). There are reindeer with greater load capacity, but you would not send a nuclear reindeer (50), since you would be wasting its capacity. An electric reindeer (10) would be sent, one gasoline (5) and two diesel (2 * 1).

To Spain (37) you could not send a team made up of three electric reindeer (3 * 10), one gasoline (5) and two diesel (2 * 1), since there cannot be more electric reindeer than gasoline. Nor two electric reindeer (2 * 10), three gasoline (3 * 5) and two diesel (2 * 1), since there cannot be more gasoline than diesel. You would have to send two electric reindeer (2 * 10), two gasoline (2 * 5) and seven diesel (7 * 1).
```
const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]

const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 }
]

howManyReindeers(reindeerTypes, gifts)
// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]
```
To take into account:

 - There will always be a reindeer type with a load capacity of 1.
 - There will always be at least two types of reindeer available.
 - There is no limit to the number of reindeer of the same type to send as long as it complies with the restrictions previously stated.
 - The reindeer types are always ordered by descending load capacity.

### Twenty-first challenge
There are too many letters from children asking for gifts and it is very difficult that we can inventory all of them. That's why we have decided to create a program that draws us a table with the gifts we ask for and their quantities.

For this we are given an array of objects with the names of the gifts and their quantities. Write a function that receives this array and returns a string with the drawn table.
```
printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
])

+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 7        |
*******************
```
Another example where you can see that the table always uses only the exact space depending on the length of the names of the gifts and the quantities.
```
printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 }
])

++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************
```
As you can see, the size of the cells depends on the length of the names of the gifts and the quantities, although they will at least have to be the space of the titles Gift and Quantity respectively.

The table uses the symbols: + for the top border, * for the bottom border, - for the horizontal lines and | for the vertical lines.

Keep in mind:

 - Use only the space you need to draw the table.
 - Adapt the table to the length of the names of the gifts and the quantities or the titles of the columns.
 - There is no need to order the results.
 - The table does not end with a line break.

### Twenty-second challenge

Verify that all independent sequences of Christmas lighting systems are in strictly increasing order. We have two arrays: systemNames and stepNumbers.

systemNames contains the names of the Christmas lighting systems, and stepNumbers contains the step numbers of each system.

We must verify that the stepNumbers of each system are in strictly increasing order. If this is true, return true; otherwise, return false.

For example:
```
const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

checkStepNumbers(systemNames, stepNumbers) // => true

// tree_1 has steps: [1, 2]
// tree_2 has steps: [33, 44]
// house has steps: [10, 20]

// true: The steps of each system are in strictly increasing order

checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]) // => false

// tree_1 has steps: [2, 1]
// house has steps: [10]

// false: tree_1 has steps in decreasing order
```
Note that:

 - The position of the system name in systemNames and the step number in stepNumbers correspond to the same system.
 - The steps in stepNumbers can be repeated for different systems.

### Twenty-third challenge

### Twenty-fourth challenge


# Feedback

If you have any feedback, or comments please reach out to me at federicomaciel.dev@gmail.com or via GitHub.

# Authors

- [My GitHub profile](https://github.com/MacielFede)
- [My LinkedIn profile](https://uy.linkedin.com/in/federico-maciel?trk=people-guest_people_search-card)
