Requirements:

- Implement a search feature that allows users to input a movie title and retrieve a list of movies that match the search query.
- Display the search results in a responsive user interface that adjusts to different screen sizes, 
- For each movie in the search results, present the movie title, poster image, release year, and any other relevant information you consider important.
- When a user clicks on a movie from the search results, display additional details about the selected movie, including the plot summary, director, actors, and IMDb rating.
- Bonus: If the API supports it, incorporate pagination or infinite scrolling for the search results.
- Bonus: Optimize performance and reduce API requests by implementing caching to store previously fetched movie data locally.
- Bonus: Integrate additional features or enhancements that you believe would enhance the application.
- Utilize a public movie API, such as the Open Movie Database (OMDb) API (http://www.omdbapi.com/), or any other similar API of your choice.
api key = 18a85a90


TODO

1- main interface 
    1.1- nav section // done
    1.2- hero section // done
    1.3- movie card compnonent // done
    1.4- home screen - rsepnosive // done
    1.5- details screen compnonet  // done
8- respnosivness //
3- Search feature //
4- details routing // done
2- API fetch // done



5- pagination
6- caching
7- error handling


/ move all colore to colors object
// move classes to modules

sample movie object
{
  "Title": "Lion",
  "Year": "2016",
  "Rated": "PG-13",
  "Released": "06 Jan 2017",
  "Runtime": "118 min",
  "Genre": "Biography, Drama",
  "Director": "Garth Davis",
  "Writer": "Saroo Brierley, Luke Davies",
  "Actors": "Dev Patel, Nicole Kidman, Rooney Mara",
  "Plot": "A five-year-old Indian boy is adopted by an Australian couple after getting lost hundreds of kilometers from home. 25 years later, he sets out to find his lost family.",
  "Language": "English, Hindi, Bengali",
  "Country": "Australia, United Kingdom, United States, India",
  "Awards": "Nominated for 6 Oscars. 59 wins & 110 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjA3NjkzNjg2MF5BMl5BanBnXkFtZTgwMDkyMzgzMDI@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "8.0/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "84%"
    },
    {
      "Source": "Metacritic",
      "Value": "69/100"
    }
  ],
  "Metascore": "69",
  "imdbRating": "8.0",
  "imdbVotes": "244,131",
  "imdbID": "tt3741834",
  "Type": "movie",
  "DVD": "01 Apr 2017",
  "BoxOffice": "$51,738,905",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}