import React from "react";
import { Container, Row, Col, Tabs, Tab, Button } from "react-bootstrap";

const ServiceComponent = () => {
  // Define data directly within the component
  const categoryData = [
    { id: 1, title: "Blow dry" },
    { id: 2, title: "Facial" },
    { id: 3, title: "Manicure" },
    { id: 4, title: "Pedicure " },
    { id: 5, title: "Moroccan bath" },
  ];

  const serviceData = [
    {
      id: 1,
      title: "Fast, professional blow dry for any occasion.",
      price_min: 50,
      category_id: 1,
      active: true,
    },
    {
      id: 2,
      title:
        "Refresh and rejuvenate your skin with our personalized facial treatment",
      price_min: 60,
      category_id: 2,
      active: true,
    },
    {
      id: 3,
      title: "Indulge in a manicure for perfectly polished hands.",
      price_min: 70,
      category_id: 3,
      active: true,
    },
    {
      id: 4,
      title:
        "Treat your feet to our pedicure service for soft, refreshed relaxation.",
      price_min: 80,
      category_id: 4,
      active: true,
    },
    {
      id: 5,
      title:
        "Experience luxury with our Moroccan bath, blending traditional techniques for radiant skin.",
      price_min: 90,
      category_id: 5,
      active: true,
    },
    // Add more services as needed
  ];

  return (
    <Container className="Service">
      <Row className="h-10">
        <Col className="Header d-flex text-center justify-content-center">
          <h2 className="decorated">
            <span>SIGN UP FOR SERVICES</span>
          </h2>
        </Col>
      </Row>
      <Row className="h-80">
        <Tabs
          defaultActiveKey={categoryData[0].id}
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          {categoryData.map((category) => (
            <Tab
              className="Service-Tab"
              key={category.id}
              eventKey={category.id}
              title={category.title}
              style={{ fontSize: "5.9vw" }}
            >
              {serviceData
                .filter(
                  (service) =>
                    service.category_id === category.id && service.active
                )
                .map((service) => (
                  <Row
                    className="w-100 d-flex align-items-end"
                    key={service.id}
                  >
                    <Col className="col-10 col-md-8">
                      <p>{service.title}</p>
                    </Col>
                    <Col className="col text-center">
                      <p>{`${service.price_min} AED`}</p>
                    </Col>
                  </Row>
                ))}
            </Tab>
          ))}
        </Tabs>
      </Row>
      <Row className="h-10">
        <Col className="text-center mt-2 mb-4">
          <Button
            size="lg"
            variant="primary"
            href="/"
          >
            SIGN UP FOR SERVICES
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export { ServiceComponent };
