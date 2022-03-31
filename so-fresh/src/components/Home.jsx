import { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles/Home.css";

export const Home = ({ messages }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <CarouselProvider
      isPlaying={isPlaying}
      naturalSlideWidth={100}
      naturalSlideHeight={10}
      totalSlides={messages.length}
      infinite
    >
      <Slider>
        {messages.map((message, index) => (
          <Slide index={index} key={index} className="slideshow-container">
            <div className="mySlides">
              <q>{message.quote}</q>
              <br />
              <p className="author">{message.author}</p>
            </div>
          </Slide>
        ))}
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "||" : ">"}</button>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};
