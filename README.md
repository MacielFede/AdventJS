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

# Feedback

If you have any feedback, or comments please reach out to me at federicomaciel.dev@gmail.com or via GitHub.

# Authors

- [My GitHub profile](https://github.com/MacielFede)
- [My LinkedIn profile](https://uy.linkedin.com/in/federico-maciel?trk=people-guest_people_search-card)
