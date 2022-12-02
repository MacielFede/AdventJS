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

# Feedback

If you have any feedback, or comments please reach out to me at federicomaciel.dev@gmail.com or via GitHub.

# Authors

- [My GitHub profile](https://github.com/MacielFede)
- [My LinkedIn profile](https://uy.linkedin.com/in/federico-maciel?trk=people-guest_people_search-card)
