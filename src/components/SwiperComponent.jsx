import { Container, Row, Col} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay} from "swiper";
import essie from "../assets/logos/essie.png"
import "../css/Homepage.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import images for Swiper
import Slide1 from '../assets/logos/essie.png';
import Slide2 from "../assets/logos/casmara.png";
import Slide3 from "../assets/logos/gelish.png";
import Slide4 from "../assets/logos/kerastase.png";
import Slide5 from "../assets/logos/loreal.png";
import Slide6 from "../assets/logos/lotus.png";
import Slide7 from "../assets/logos/o3.png";
import Slide8 from "../assets/logos/olaplex.png";
import Slide9 from "../assets/logos/opi.svg";
import Slide10 from "../assets/logos/vlcc1.avif";

const SwiperComponent = () =>{

    return (
      <Container className="Swiper mb-20" fluid>
        <Row className="h-10">
          <Col className="News-Header text-center">
            <h2 className="decorated">
              <span>Brands we work with</span>
            </h2>
          </Col>
        </Row>
        <Row className="Swiper h-100">
          <Col>
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, FreeMode, Pagination]}
              className=""
              breakpoints={{
                400: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 5,
                },
              }}
            >
              <SwiperSlide>
                <img className="Size" src={Slide1} alt="Essie" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="Size" src={Slide2} alt="Dr.Sorbie" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="Size"
                  src={Slide3}
                  alt="K18 BIOMIMETIC HAIRSCIENCE"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slide5} alt="Tangle Teezer" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slide6} alt="ALFAPARF MILANO" />
              </SwiperSlide>
              <SwiperSlide>
                <img  src={Slide4} alt="Provida Organic" />
              </SwiperSlide>
              <SwiperSlide>
                <img  src={Slide7} alt="ZOOM Cosmetics" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slide9} alt="OLLIN Proffesional" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slide10} alt="Fanola" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slide1} alt="ikko" />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    );
}

export {SwiperComponent};