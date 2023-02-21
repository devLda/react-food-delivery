import React from "react";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import '../styles/hero-section.css'

import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css"

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from '../assets/fake-data/products.js';

import hamburgerCategory from '../assets/images/hamburger.png'
import pizzaCategory from '../assets/images/pizza.png'
import breadCategory from '../assets/images/bread.png'

import ProductCard from '../components/UI/product-card/ProductCard.jsx';

import whyImg from '../assets/images/location.png'

import networkImg from '../assets/images/network.png'

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Home = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState('All')

  const handleAllProducts = () => {
    setProduct(products)
  }

  const handleCategoryProducts = (category) => {
    products.map((item) => {
      if(item.category.includes(category))
      {
        // console.log(item)
        setProduct(pre => [...pre, item])
      }
    })
  }

  useEffect(() => {
    if(category.includes('All'))
    {
      handleAllProducts();
    }
    else
    {
      setProduct([])
      handleCategoryProducts(category);
    }
  }, [category]);
  
  // console.log(product)
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col className="col-ssm-12">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait food <br/> <span>at your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, exceptu
                </p>
                <div className="hero__btns mt-4">
                  <button className="order__btn d-flex align-items-center mb-4">
                    <span>Order Now</span>  <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-ssm-12">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0 mt-4 mb-4">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mt-4">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.amet consectetur adipisicing elit{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-50 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p className="feature__text">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg='12'>
              <div className="food__category d-flex align-items-center justify-content-center gap-5">
                <button 
                  className = {`all__btn  
                  ${category === 'All' ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory('All')}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 
                      ${category === 'Burger' ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory('Burger')}
                >
                    <img src={hamburgerCategory} alt="" />Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2
                      ${category === 'Pizza' ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory('Pizza')}
                >
                    <img src={pizzaCategory} alt="" />Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2
                      ${category === 'Bread' ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory('Bread')}
                >
                    <img src={breadCategory} alt="" />Bread
                </button>
              </div>
            </Col>

            {product.map((item, index) => (
              <Col lg="3" md="4" sm="6" xs="6" key={index} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section >
        <Container className="why__choose-us">
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-food-order" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__food-order">
                <h2 className="food-order-title mb-4">
                  Why <span>Food order?</span>
                </h2>
                <p className="food-order-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum. Qui, earum?
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum. Qui, earum?
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="hot-pizza pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </Col>

            
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
