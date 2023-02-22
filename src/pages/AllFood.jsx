import React, { useState} from "react";
import Helmet from '../components/Helmet/Helmet.js'
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";

import "../styles/all-foods.css";

const AllFood = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productData, setProductData] = useState(products)

  // const searchedProduct = products.filter((item) => {
  //   if (searchTerm.value === "") {
  //     return item;
  //   }
  //   if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //     return item;
  //   } else {
  //     return console.log("not found");
  //   }
  // });

  const handleHigherSort = () => {
    console.log('sort')
    productData.sort((a, b) => a.price - b.price);
    setProductData(productData)
  }


  return (
    <Helmet title='All-Foods'>
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="high-price" onClick={handleHigherSort}>High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {productData
              ?.filter((item) => {
                if (searchTerm.value === "") return item;
                if (
                  item.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                  return item;
                return 0;
              })
            .map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFood