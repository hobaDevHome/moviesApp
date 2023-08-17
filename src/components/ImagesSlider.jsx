import img1 from "../../public/images/lion2.jpg";
import img2 from "../../public/images/home.jpg";
import img3 from "../../public/images/inout.jpg";
import img4 from "../../public/images/captain.jpg";
import Hero from "./Hero";
import "pure-react-carousel/dist/react-carousel.es.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

const movies = [
  {
    Title: "Lion",
    Year: "2016",
    Rated: "PG-13",
    Runtime: "118 min",
    Genre: "Biography, Drama",
    Director: "Garth Davis",
    Actors: "Dev Patel, Nicole Kidman, Rooney Mara",
    Plot: "A five-year-old Indian boy is adopted by an Australian couple after getting lost hundreds of kilometers from home. 25 years later, he sets out to find his lost family.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA3NjkzNjg2MF5BMl5BanBnXkFtZTgwMDkyMzgzMDI@._V1_SX300.jpg",
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

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjExOTQ4MDMyMV5BMl5BanBnXkFtZTgwMTE3NDM2MzE@._V1_SX300.jpg",
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

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg",
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

    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
  },
];

const ImagesSlider = () => {
  return (
    <div style={{ width: "100%", height: 540 }}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={4}
      >
        <Slider>
          <Slide index={0}>
            <Hero cmovie={movies[0]} />
          </Slide>
          <Slide index={1}>
            <Hero cmovie={movies[1]} />
          </Slide>
          <Slide index={2}>
            <Hero cmovie={movies[2]} />
          </Slide>
          <Slide index={3}>
            <Hero cmovie={movies[3]} />
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default ImagesSlider;
