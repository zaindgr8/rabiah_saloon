import { Container, Row, Col, Tabs, Tab, Button } from "react-bootstrap";
import { useAuth } from "../hook/useAuth";

const ServiceComponent = () => {
  const { serviceData, categoryData } = useAuth();

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
          defaultActiveKey={categoryData.id}
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          {categoryData
            .filter((category) => category.id !== 11472068)
            .map((category) => (
              <Tab
                className="Service-Tab"
                key={category.id}
                eventKey={category.id}
                title={category.title}
                style={{ fontSize: "5.9vw" }}
              >
                {serviceData
                  .filter((e) => e.category_id === category.id && e.active)
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
            href="https://b339878.yclients.com/company/325582/menu?o="
          >
            SIGN UP FOR SERVICES
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export { ServiceComponent };
