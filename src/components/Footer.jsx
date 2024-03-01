import { Container, Row, Col } from "react-bootstrap";
import "../css/index.css";
import { CustomLink } from "./CustomLink";
import { InstagramLogo } from "phosphor-react";
import logo from "../pages/img/rlogo3.png";

const Footer = () => {
  return (
    <>
      <Container className="Footer" fluid>
        <Row className="d-flex justify-content-center  h-20">
          <Col className="col-12 col-md-3 d-flex align-items-center justify-content-center">
            <img className="Footer-SVG align-self-center" src={logo} alt="" />
          </Col>
          <Col className="Footer-Menu col-6 col-md-3">
            <h4>NAVIGATION</h4>
            <ul>
              <li>
                <CustomLink to="/">HOME</CustomLink>
              </li>
              <li>
                <CustomLink to="/service">Services</CustomLink>
              </li>
              <li>
                <CustomLink to="/team">Team</CustomLink>
              </li>
              <li>
                <CustomLink to="/about">About Us</CustomLink>
              </li>
              <li>
                <CustomLink to="/shop">Goods</CustomLink>
              </li>
              <li>
                <CustomLink to="/posts">News</CustomLink>
              </li>
            </ul>
          </Col>
          <Col className="text-white col-6 col-md-3">
            <h4>CONTACT US</h4>

            <p>Dubai, United Arab Emirates</p>

            <p>+971 52 279 1298</p>
          </Col>

          <Col className="Footer-Subscribe col-6 col-md-3">
            <h4>SUBSCRIBE</h4>
            <Col className="d-flex text-align-center justify-content-center justify-content-md-start align-content-center">
              <InstagramLogo size={32} color={"white"}></InstagramLogo>
              <a
                href="https://www.instagram.com/zainulabideen0007/"
                className="align-self-center"
              >
                rabia_Saloon
              </a>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" style={{ color: "white" }}>
            © RABIA SALOON — 2024. All rights reserved
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { Footer };
