import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Food Order</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                voluptatem praesentium doloremque accusantium, cumque aspernatur
                expedita
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: Ha Noi</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 0123456789</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: leducanh@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span><i class="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg='6' md='6'>
            <p className="copyright__text">Copyright - 2023, website made by AnhOct</p>
          </Col>
          <Col lg='6' md='6'>
            <div className="social__links d-flex align-items-center justify-content-end gap-4">
                <p className="m-0">Follow: </p>
                <span><a href='https://github.com/devLda'><i class="ri-facebook-line"></i></a></span>
                <span><a href='https://github.com/devLda'><i class="ri-github-fill"></i></a></span>
                <span><a href='https://www.linkedin.com/in/anh-le-duc-231265246/'><i class="ri-linkedin-line"></i></a></span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
