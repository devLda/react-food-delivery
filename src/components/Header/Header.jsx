import React, {useRef} from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";

import '../../styles/header.css'

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Food Order</h5>
          </div>
          {/* ========Menu=========== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <NavLink to={item.path} key={index} className={navClass => navClass.isActive ? "active__menu" : "''"}>
                    {item.display}
                  </NavLink>
                ))}
            </div>
          </div>

          {/* ========== nav right icons ============ */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon">
              <i class="ri-store-2-fill"></i>
              <span className="cart__badge">2</span>
            </span>
            <span className="user">
              <Link to="/login">
                <i class="ri-user-3-line"></i>
              </Link>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;