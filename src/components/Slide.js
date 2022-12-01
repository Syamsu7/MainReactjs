import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../img/11.png';
import Slide2 from '../img/12.png';
import Slide3 from '../img/13.png';
import Slide4 from '../img/14.png';
import Slide5 from '../img/15.png';

function slider() {
  return (
    <Carousel fade>
      <Carousel.Item interval={900}>
        <a href="https://syamsu7.github.io/">
          <img
            id="img"
            className="d-block w-100"
            src={Slide1}
            alt="First slide"
          />
        </a>
        <Carousel.Caption>
          <p>Soft Green</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}>
        <a href="https://syamsu7.github.io/Portfolio-3-profile/">
          <img
            id="img"
            className="d-block w-100"
            src={Slide2}
            alt="Second slide"
          />
        </a>
        <Carousel.Caption>
          <p>Sketch</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}>
        <a href="https://syamsu7.github.io/Portfolio-4-stillprofile/">
          <img
            id="img"
            className="d-block w-100"
            src={Slide3}
            alt="Third slide"
          />
        </a>
        <Carousel.Caption>
          <p>Dicoding Project</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}>
        <a href="https://syamsu7.github.io/DOM-ColourPlaying-/">
          <img
            id="img"
            className="d-block w-100"
            src={Slide4}
            alt="Third slide"
          />
        </a>
        <Carousel.Caption>
          <p>Colour Playing</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}>
        <a href="https://syamsu7.github.io/Portfolio1/">
          <img
            id="img"
            className="d-block w-100"
            src={Slide5}
            alt="Third slide"
          />
        </a>
        <Carousel.Caption>
          <p>Web Roadmap</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default slider;