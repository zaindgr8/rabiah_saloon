import React from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const Courses = () => {
  // Hardcoded data for courses
  const coursesData = [
    {
      id: 1,
      title: "Complete Wax Package",
      details:
        "Full hand wax, full leg wax, under arm wax, classic manicure, classic pedicure.",
      duration:
        "Total grooming perfection with our Complete Wax and Nail Care Package.",
      price: "99 AED",
    },
    {
      id: 2,
      title: "Menicure/ Pedicure",
      details:
        "Hair Spa, Gel Manicure, Gel Pedicure, Bikini Wax, 20 min foot massage",
      duration:
        "Indulge in pure bliss with our Deluxe Spa and Nail Care Package.",
      price: "149 AED",
    },
    // Add more courses as needed
  ];

  return (
    <div>
      <Container className="mb-20">
        <Row className="h-10">
          <Col className="Header text-center">
            <h2 className="decorated">
              <span>OUR PACKAGES</span>
            </h2>
          </Col>
        </Row>
        <Accordion>
          {coursesData.map((course) => (
            <Accordion.Item key={course.id} eventKey={course.id}>
              <Accordion.Header>{course.title}</Accordion.Header>
              <Accordion.Body>
                <h2>{`${course.price}`}</h2>
                <p>{course.details}</p>
                <p>{course.duration}</p>
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
      </Container>
    </div>
  );
};

export default Courses;
