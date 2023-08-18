// @ts-nocheck
import img1 from "../../public/images/lion2.jpg";
import img2 from "../../public/images/home.jpg";
import img3 from "../../public/images/inout.jpg";
import img4 from "../../public/images/captain.jpg";
import Hero from "./Hero";
// import CarouselItem from "./CarouselItem";
import { useState } from "react";

const movies = [
  {
    Title: "The Lion King",
    Year: "1994",
    Rated: "G",
    Runtime: "88 min",
    Genre: "Animation, Adventure, Drama",
    Director: "Roger Allers, Rob Minkoff",
    Actors: "Matthew Broderick, Jeremy Irons, James Earl Jones",
    Plot: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    Poster: img1,
    RatingStars: 4,
    imdbID: "tt0110357",
  },
  {
    Title: "Home",
    Year: "2015",
    Rated: "PG",
    Runtime: "94 min",
    Genre: "Animation, Adventure, Comedy",
    Director: "Tim Johnson",
    Actors: "Jim Parsons, Rihanna, Steve Martin",
    Plot: "An alien on the run from his own people makes friends with a girl. He tries to help her on her quest, but can be an interference.",

    Poster: img2,
    RatingStars: 4.5,
    imdbID: "tt2224026",
  },
  {
    Title: "Inside Out",
    Year: "2015",
    Rated: "PG",
    Released: "19 Jun 2015",
    Runtime: "95 min",
    Genre: "Animation, Adventure, Comedy",
    Director: "Pete Docter, Ronnie Del Carmen",
    Writer: "Pete Docter, Ronnie Del Carmen, Meg LeFauve",
    Actors: "Amy Poehler, Bill Hader, Lewis Black",
    Plot: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",

    Poster: img3,
    RatingStars: 5,
    imdbID: "tt2096673",
  },
  {
    Title: "Captain America",
    Year: "1990",
    Rated: "PG-13",
    Released: "26 Jul 1991",
    Runtime: "97 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Albert Pyun",
    Writer: "Joe Simon, Jack Kirby, Stephen Tolkin",
    Actors: "Matt Salinger, Ronny Cox, Ned Beatty",
    Plot: "Frozen in the ice for decades, Captain America is freed to battle against archcriminal The Red Skull.",

    Poster: img4,
    RatingStars: 3,
    imdbID: "tt0103923",
  },
];

const ImagesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };
  const currentSlide = movies[currentIndex];
  console.log("currentslide", currentSlide);
  return (
    <div style={{ width: "100%", height: 540 }}>
      <div>
        <Hero {...currentSlide} onPrev={goToPrevSlide} onNext={goToNextSlide} />
      </div>
    </div>
  );
};

export default ImagesSlider;
