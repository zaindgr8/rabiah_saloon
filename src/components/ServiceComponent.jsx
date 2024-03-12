import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Button,
  Dropdown,
} from "react-bootstrap";
import msg from "../assets/msg.jpg";
import moro from "../assets/morocon.jpg";
import hair from "../assets/hr.jpg";
import thread from "../assets/thrdng.jpg";
import skn from "../assets/skn.jpg";
import wxng from "../assets/wxng.jpg";

const ServiceComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const categoryData = [
    {
      id: 1,
      title: "Hair",
      subCategories: [
        { id: 1, title: "Blow Dry (Short)", imageUrl: hair, price: 100 },
        { id: 2, title: "Hair Cut", imageUrl: hair, price: 70 },
        { id: 3, title: "Blow Dry with Curls", imageUrl: hair, price: 120 },
        { id: 4, title: "Hair Spa", imageUrl: hair, price: 80 },
        { id: 5, title: "Root Touchup", imageUrl: hair, price: 100 },
      ],
    },
    {
      id: 2,
      title: "Threading",
      subCategories: [
        { id: 1, title: "Eyebrow/ Upper lips", imageUrl: thread, price: 20 },
        { id: 2, title: "Full Face Threading", imageUrl: thread, price: 70 },
        { id: 3, title: "Eyebrow Tint", imageUrl: thread, price: 50 },
        {
          id: 3,
          title: "Chin/ Forehead/ Sidelocks",
          imageUrl: thread,
          price: 15,
        },
      ],
    },
    {
      id: 3,
      title: "Skin",
      subCategories: [
        { id: 1, title: "Face Bleach", imageUrl: skn, price: 40 },
        { id: 2, title: "Deep Cleansing", imageUrl: skn, price: 100 },
        { id: 3, title: "Herbal Facial", imageUrl: skn, price: 120 },
        { id: 4, title: "Cold Facial", imageUrl: skn, price: 150 },
      ],
    },
    {
      id: 4,
      title: "Waxing",
      subCategories: [
        { id: 1, title: "Full Arms/ leg", imageUrl: wxng, price: 70 },
        { id: 2, title: "Half Arms/ leg", imageUrl: wxng, price: 50 },
        { id: 3, title: "Under Arms", imageUrl: wxng, price: 25 },
        { id: 4, title: "Bikini", imageUrl: wxng, price: 80 },
        { id: 5, title: "Back/ Stomach", imageUrl: wxng, price: 30 },
        { id: 6, title: "Full Body Wax", imageUrl: wxng, price: 200 },
        { id: 7, title: "Face Wax", imageUrl: wxng, price: 90 },
        {
          id: 3,
          title: "Upper Lips/ Chin/ Forehead",
          imageUrl: wxng,
          price: 20,
        },
      ],
    },
    {
      id: 5,
      title: "Massage & Spa",
      subCategories: [
        { id: 1, title: "Foot Massage", imageUrl: msg, price: 65 },
        { id: 2, title: "Neck & Shoulder Massage", imageUrl: msg, price: 75 },
        { id: 3, title: "Back Massage", imageUrl: msg, price: 95 },
        { id: 4, title: "Head Massage", imageUrl: msg, price: 85 },
        { id: 5, title: "Full Body Massage", imageUrl: msg, price: 300 },
        { id: 6, title: "Couple Massage", imageUrl: msg, price: 600 },
        { id: 7, title: "Moroccan Bath", imageUrl: msg, price: 100 },
      ],
    },
  ];

  useEffect(() => {
    const initialSelectedOptions = {};
    categoryData.forEach((category) => {
      initialSelectedOptions[category.id] = category.subCategories[0];
    });
    setSelectedOptions(initialSelectedOptions);
  }, []);

  const handleOptionSelect = (categoryId, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [categoryId]: option,
    });
  };

  const renderDropdown = (category) => (
    <Dropdown>
      <Dropdown.Toggle id={`dropdown-${category.id}`} className="no-hover">
        {category.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {category.subCategories.map((subCategory, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => handleOptionSelect(category.id, subCategory)}
          >
            {subCategory.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );

  return (
    <Container className="Service">
      <Col className="h-10">
        <Col className="Header d-flex text-center justify-content-center">
          <h2 className="decorated">
            <span>SIGN UP FOR SERVICES</span>
          </h2>
        </Col>
      </Col>
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
              title={renderDropdown(category)}
              style={{ fontSize: "5.9vw" }}
            >
              {selectedOptions[category.id] && (
                <Row className="w-100 Div">
                  <Col className="col-10 col-md-8 Dis">
                    <p>{selectedOptions[category.id].title}</p>
                  </Col>
                  <Col className="col col-md-8 Dis">
                    <p>{`${selectedOptions[category.id].price} AED`}</p>
                  </Col>
                  <img
                    src={selectedOptions[category.id].imageUrl}
                    alt={selectedOptions[category.id].title}
                    className="w-50 Image Gap"
                  />
                </Row>
              )}
            </Tab>
          ))}
        </Tabs>
      </Row>
      <Row className="h-10">
        <Col className="text-center mt-2 mb-4">
          <Button size="lg" variant="primary" href="/">
            SIGN UP FOR SERVICES
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export { ServiceComponent };
