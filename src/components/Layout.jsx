import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";
import logo from "../pages/img/rlogo3.png";
import { Footer } from "./Footer";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import {
  House,
  Info,
  UsersThree,
  InstagramLogo,
  Phone,
  Heart,
} from "phosphor-react";

const Layout = () => {
  const handleClick = () => {
    document.getElementById("Close").click();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Container className="Top-Header" fluid>
        <Row className="h-100 d-none d-lg-flex ">
          <Col className="Top-Header-Content col-5 d-flex justify-content-start align-items-center">
            <CustomLink to="/" onClick={() => handleClick()}>
              HOME
            </CustomLink>
            <CustomLink to="/service" onClick={() => handleClick()}>
              SERVICES
            </CustomLink>
            {/* <CustomLink to="/team" onClick={() => handleClick()}>
              TEAM
            </CustomLink> */}
          </Col>
          <Col className="Top-Header-Content col-2">
            <img
              src={logo}
              style={{
                height: "115px",
                width: "175px",
                padding: "0 1rem",
                marginTop: "5px",
              }}
              alt=""
            />
          </Col>
          <Col className="Top-Header-Content col-5 d-flex justify-content-end align-items-center">
            {/* <CustomLink to="/shop" onClick={() => handleClick()}>
                GOODS
              </CustomLink> */}
            {/* <CustomLink to="/posts" onClick={() => handleClick()}>
                NEWS
              </CustomLink> */}
            <CustomLink to="/about" onClick={() => handleClick()}>
              ABOUT US
            </CustomLink>
          </Col>
        </Row>
      </Container>

      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
        className="Top-Header-nav d-lg-none d-block"
      >
        <Container fluid>
          <Navbar.Brand
            to="/"
            className="ms-4"
            style={{ fontWeight: "500", fontSize: "20px" }}
          >
            RABIA's Salon
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav "
            id="Close"
            className="me-3"
            style={{ border: "none", boxShadow: "none" }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="mt-1 d-flex text-center "
              style={{ height: "100svh" }}
            >
              <CustomLink to="/" onClick={() => handleClick()}>
                <House
                  size={32}
                  color={"white"}
                  style={{ marginTop: "-4px" }}
                />
                HOME
              </CustomLink>
              <CustomLink to="/service" onClick={() => handleClick()}>
                <Heart
                  size={32}
                  color={"white"}
                  style={{ marginTop: "-4px" }}
                />{" "}
                SERVICES
              </CustomLink>
              <CustomLink to="/team" onClick={() => handleClick()}>
                <UsersThree
                  size={32}
                  color={"white"}
                  style={{ marginTop: "-4px" }}
                />{" "}
                TEAM
              </CustomLink>
              <CustomLink to="/about" onClick={() => handleClick()}>
                <Info size={32} color={"white"} style={{ marginTop: "-4px" }} />
                ABOUT US
              </CustomLink>
              {/* <CustomLink to="/posts" onClick={() => handleClick()}>
                  <InstagramLogo
                    size={32}
                    color={"white"}
                    style={{ marginTop: "-4px" }}
                  />{" "}
                  NEWS
                </CustomLink> */}
              {/* <CustomLink to="/shop" onClick={() => handleClick()}>
                  <ShoppingBag
                    size={32}
                    color={"white"}
                    style={{ marginTop: "-4px" }}
                  />{" "}
                  GOODS
                </CustomLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
      <a
        href="https://wa.me/971522791298"
        style={{ height: "100px", width: "100px" }}
      >
        <Phone
          size={55}
          style={{
            position: "fixed",
            right: "30px",
            bottom: "100px",
            color: "white",
            backgroundColor: "#25d366",
            borderRadius: "15px",
            zIndex: 10,
          }}
        />
      </a>
      <a
        href="https://www.instagram.com/rabiasbeauty.Salon?igsh=YXNiNTd3c3puanA2"
        target="_blank"
        style={{ height: "100px", width: "100px" }}
      >
        <InstagramLogo
          size={55}
          style={{
            position: "fixed",
            right: "30px",
            bottom: "30px",
            color: "white",
            backgroundColor: "#f09433",
            background:
              "-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            background:
              "-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            background:
              "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            filter:
              "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1)",
            borderRadius: "15px",
            zIndex: 10,
          }}
        />
      </a>

      <Footer></Footer>
    </>
  );
};

export { Layout };
