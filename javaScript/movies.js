//array called 'movies' with movie objects inside
//movie object has; title (string), rating (number), has_watched (bolian)
var movies = [
  {
    title: "Night of the Living Dead",
    rating: 4,
    hasWatched: true,
  },
  {
    title: "Argo",
    rating: 4.5,
    hasWatched: true,
  },
  {
    title: "The Other Diamond Man-eater",
    rating: 0,
    hasWatched: false,
  },
  {
    title: "The Shawshank Redemption",
    rating: 10,
    hasWatched: true,
  },
]
movies.forEach(function(movie) {
  var result = "You have ";
  if(movie.hasWatched){
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result)
})
