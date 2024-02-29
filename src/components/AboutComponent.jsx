import { Container, Row, Col } from "react-bootstrap";
import logo from "../pages/img/rlogo4.png";

const AboutComponent = () => {
  return (
    <Container className="About mb-20 d-flex align-items-center" fluid>
      <Row className="About-content col-12 d-flex justify-content-center m-0">
        <Col className="d-flex justify-content-center col-12">
          <img className="About-SVG align-self-center" src={logo} alt="" />
        </Col>
        <Col className="col-10 col-sm-11 col-lg-6 d-flex item-center text-center">
          <p>
            Welcome to RABIA SALOON- your premier destination for luxury hair
            and beauty services in Dubai. Our expert team of stylists and color
            specialists is dedicated to enhancing your natural beauty with
            precision and flair. From glamorous hair transformations to
            indulgent beauty treatments, we prioritize personalized care and
            exceptional results. Experience the epitome of elegance and
            sophistication at rabia Salon.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export { AboutComponent };
