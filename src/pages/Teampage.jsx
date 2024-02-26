import { Container, Row, Col } from "react-bootstrap";


const Teampage = () => {
  // Define dummy employee data
  const dummyEmployeeData = [
    {
      id: 1,
      name: "Alice",
      specialization: "Hair Stylist",
      avatar_big: "avatar1.jpg",
    },
    {
      id: 2,
      name: "Bob",
      specialization: "Makeup Artist",
      avatar_big: "avatar2.jpg",
    },
    {
      id: 3,
      name: "Charlie",
      specialization: "Nail Technician",
      avatar_big: "avatar3.jpg",
    },
    {
      id: 4,
      name: "Diana",
      specialization: "Skincare Specialist",
      avatar_big: "avatar4.jpg",
    },
    {
      id: 5,
      name: "Emma",
      specialization: "Massage Therapist",
      avatar_big: "avatar5.jpg",
    },
    {
      id: 6,
      name: "Frank",
      specialization: "Eyebrow Stylist",
      avatar_big: "avatar6.jpg",
    },
    {
      id: 7,
      name: "Grace",
      specialization: "Waxing Specialist",
      avatar_big: "avatar7.jpg",
    },
    {
      id: 8,
      name: "Henry",
      specialization: "Spa Manager",
      avatar_big: "avatar8.jpg",
    },
  ];

  return (
    <Container className="Team mb-20" fluid>
      <Row className="h-10">
        <Col className="Team-Header text-center">
          <h2 className="decorated-white">
            <span>Discover Our Beauty Team</span>
          </h2>{" "}
        </Col>
      </Row>

      <Row className="Team d-md-flex justify-content-center justify-content-sm-around  text-center h-80">
        {dummyEmployeeData.map((data) => (
          <Col
            className="me-3 ms-3 mb-5 col-9 col-sm-5 col-md-4 col-xl-3"
            sm={{ height: "300px" }}
            key={data.id}
          >
            <div className="Team-container">
              <img src={data.avatar_big} alt={data.name} />
              <div className="Team-person">
                <h4 style={{ marginTop: "10px" }}>{data.name}</h4>
                <p>{data.specialization}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export { Teampage };
