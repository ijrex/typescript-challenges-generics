////////////////////////////////////////////////////
// 06 - Indexing an array of objects
////////////////////////////////////////////////////

const someBooks = [
    { title: 'War & Peace', Authors: 'Leo Tolstoy', pages: 1140 },
    { title: 'The Time Machine', Authors: 'H.G. Wells', pages: 84 },
    { title: 'Frankenstein', Authors: 'Mary Shelley', pages: 258 },
]

const someFilms = [
    { title: 'Bladerunner', director: 'RidleyScott', length: 117 },
    { title: 'The Matrix', director: 'Lilly Wachowski', length: 136 },
    { title: 'Alien', director: 'Ridley Scott', length: 117 },
]

/* Edit between these lines only >>>>>>>>>>>>>>>>>>> */

const mapAllPropFromArray = (arrOfObjs: unknown, key: string) => {
    console.log(arrOfObjs, key)
    return arrOfObjs.map((obj) => obj[key])
}

/* <<<<<<<<<<<<<<<<<<<< Edit between these lines only */

// Scenarios should pass:
const arrOfBookTitles = mapAllPropFromArray(someBooks, 'title')
const arrOfBookLengthInPages = mapAllPropFromArray(someBooks, 'pages')
const arrOfFilmDirectors = mapAllPropFromArray(someFilms, 'director')
const arrOfFilmLengths = mapAllPropFromArray(someFilms, 'length')

// Scenarios should have warnings:
const arrOfBookPublishers = mapAllPropFromArray(someBooks, 'publisher')
const arrOfFilmYears = mapAllPropFromArray(someFilms, 'year')

console.log('arrOfBookTitles', arrOfBookTitles)
console.log('arrOfBookLengthInPages', arrOfBookLengthInPages)
console.log('arrOfFilmDirectors', arrOfFilmDirectors)
console.log('arrOfFilmLengths', arrOfFilmLengths)
console.log('arrOfBookPublishers', arrOfBookPublishers)
console.log('arrOfFilmYears', arrOfFilmYears)

export default {}
