// The global variable
var watchList = [
  {
    Title: 'Inception',
    Director: 'Christopher Nolan',
    imdbRating: '8.8'
  },
  {
    Title: 'Interstellar',
    Director: 'Christopher Nolan',
    imdbRating: '8.6'
  },
  {
    Title: 'The Dark Knight',
    Director: 'Christopher Nolan',
    imdbRating: '9.0'
  },
  {
    Title: 'Batman Begins',
    Director: 'Christopher Nolan',
    imdbRating: '8.3'
  },
  {
    Title: 'Avatar',
    Director: 'James Cameron',
    imdbRating: '7.9'
  }
]

function getRating (watchList) {
  // Only change code below this line
  let nolanMovies = watchList.filter(
    item => item.Director == 'Christopher Nolan'
  )
  let sumOfRatings = nolanMovies.reduce(
    (sum, item) => sum + parseFloat(item.imdbRating),
    0
  )
  // Only change code above this line
  return sumOfRatings / nolanMovies.length
}
console.log(getRating(watchList))

// Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan
// The getRating(watchList) should equal 8.675.
