import { Container, Row, Col, Button, Form, Accordion } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

import InputMask from "react-input-mask";
import "../css/Homepage.css";

// Components
import { Teampage } from "./Teampage";
import { Slider } from "../components/Slider";
import { ServiceComponent } from "../components/ServiceComponent";
import { AboutComponent } from "../components/AboutComponent";
import { useAuth } from "../hook/useAuth";
import { SwiperComponent } from "../components/SwiperComponent";
import { SwiperInstagram } from "../components/SwiperInstagram";
import { title } from "../data/packages";
import Courses from "./Courses";

const Homepage = () => {
  const { serviceData, employeeData, setMail, mail, sendMail } = useAuth();

  // Send Mail

  const [answer, setAnswer] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMail((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mail["subject"] = "Feedback. Question/Suggestion";

    sendMail();
    setAnswer(
      "Your message has been sent successfully! You will be contacted shortly."
    );

    setTimeout(() => {
      setAnswer("");
    }, 10000);
  };

  return (
    <>
      <Slider />
      <AboutComponent />
      <ServiceComponent />
      <Teampage />

      {/* <Container className="mb-20">
          <Row className="h-10">
            <Col className="Header text-center">
              <h2 className="decorated">
                <span>OUR COURSES</span>
              </h2>
            </Col>
          </Row>
          <Accordion>
            {serviceData
              .filter((item) => item.category_id == 11472068)
              .map((training) => (
                <Accordion.Item key={training.id} eventKey={training.id}>
                  <Accordion.Header>{training.title}</Accordion.Header>
                  <Accordion.Body>
                    <h2>{`${training.price_max} AED`}</h2>
                    <p>{`Teacher master ${getEmployee(training.staff.map((item) => item.id))}`}</p>
                    <p>{`Course duration ${getTimeFromMins(
                      training.staff.map((item) => item.seance_length)
                    )}`}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
          </Accordion>
          <Row className="justify-content-center text-center">
            <Col className="mb-3 mt-3">
              <Link to={`/training`}>
                <Button size="lg" variant="primary">
                  SIGN UP FOR A COURSE
                </Button>{" "}
              </Link>
            </Col>
          </Row>
        </Container> */}

      <Courses />

      <SwiperComponent />

      <Container className="mb-20" fluid>
        <Row className="h-10">
          <Col className="Header text-center">
            <h2 className="decorated">
              <span>OUR LOCATION</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.7893982018287!2d55.2716711150099!3d25.187130783885836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4343b9732361%3A0xe2e3617c51a0b34d!2sBusiness%20Bay%2C%20Dubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1645369458927!5m2!1sen!2s"
              width="100%"
              height="500"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              title="Dubai Business Bay Map"
            ></iframe>
          </Col>
        </Row>
      </Container>

      <Container className="News mb-20" fluid>
        <Row className="h-10">
          <Col className="News-Header text-center">
            <h2 className="decorated-white">
              <span>rabia SALOON</span>
            </h2>
          </Col>
        </Row>

        <SwiperInstagram />

        <Row className="justify-content-center text-center">
          <Col className="mb-5 pt-4">
            <Button
              href="https://www.instagram.com/bar_studio.mogilev/?hl=ru"
              size="lg"
              variant="primary"
            >
              FOLLOW US ON INSTAGRAM
            </Button>{" "}
          </Col>
        </Row>
      </Container>

      <Container className="Contacts mb-20" fluid>
        <Row className="h-10">
          <Col className="Header text-center">
            <h2 className="decorated">
              <span>We welcome your questions and suggestions </span>
            </h2>
          </Col>
        </Row>
        <Row className="d-flex flex-column flex-md-row justify-content-center h-100">
          <Col className="col-12 col-md-4 d-flex flex-column d-md-block align-items-center align-items-md-start col-lg-5 col-xxl-4">
            <Col className="Contacts-header text-center">OUR CONTACTS</Col>
            <Col className="Contacts-header mt-3">
              <p>We are located at:</p>
              <p>Dubai, United Arab Emirates</p>
              <p>Our contact number:</p>
              <p>+971 52 279 1298</p>
              <p>We will definitely contact you!</p>
            </Col>
          </Col>
          <Col className="Contacts-Form col-12 col-md-6 col-xxl-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Mail</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email to contact you"
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>your phone number</Form.Label>
                <Form.Control
                  as={InputMask}
                  name="tel"
                  type="tel"
                  mask="+971 52 279 1298"
                  placeholder="Enter Your Number"
                  required
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Phone number to contact you
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>your message</Form.Label>
                <Form.Control
                  name="text"
                  type="text"
                  placeholder="I would like to clarify with you about the service.."
                  required
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="d-flex justify-content-center"
                controlId="formBasicText"
              >
                <Button variant="primary" type="submit" className="m-3">
                  Connect with us
                </Button>
              </Form.Group>
              <Col>
                <Form.Text
                  style={{ color: "green!important", fontSize: "15px" }}
                >
                  {answer}
                </Form.Text>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { Homepage };
