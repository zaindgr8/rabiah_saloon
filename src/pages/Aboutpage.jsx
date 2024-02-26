import { Slider } from '../components/Slider';
import { Container, Row, Col} from 'react-bootstrap';
import { AboutComponent } from '../components/AboutComponent';
import { Teampage } from './Teampage';  
import medal from './img/medal.svg';
import coffee from './img/coffee-cup.svg';
import best from './img/best-friend.svg';
import { SwiperComponent } from '../components/SwiperComponent';

const Aboutpage = () =>{
    return (
      <>
        <Slider />

        <AboutComponent />

        <Teampage />

        <Container fluid style={{ marginTop: "40px", marginBottom: "50px" }}>
          <Row>
            <Col className="Header text-center">
              By choosing us you can be sure of 3 things:
            </Col>
          </Row>
          <Row className="d-flex justify-content-between flex-column flex-md-row text-center mt-5">
            <Col className="">
              <div className="About-container ">
                <img
                  alt="employee"
                  style={{ marginLeft: "5px" }}
                  src={coffee}
                />
                <div className="">
                  <h4 style={{ marginTop: "20px" }}>Hospitality</h4>
                  <p>
                    YOU WILL BE SURELY OFFERED A CUP OF FRAGRANT COFFEE OR TEA
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="About-container">
                <img alt="employee" src={medal} />
                <div className="">
                  <h4 style={{ marginTop: "20px" }}>Quality</h4>
                  <p>WE WORK ONLY WITH PROFESSIONAL MATERIALS</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="About-container">
                <img alt="employee" src={best} />
                <div className="">
                  <h4 style={{ marginTop: "20px" }}>Result</h4>
                  <p>
                    Before you know it, you'll want to come back to us again.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <SwiperComponent />
      </>
    );
}

export {Aboutpage};