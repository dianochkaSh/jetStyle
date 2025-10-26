import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Navbar: React.FC  = () => {
  return (
    <div className="header-menu">
      <ul className="left-menu">
        <li className="left-menu__item">
          <Link className="left-menu__link" href="/our-tearm">Мы</Link>
        </li>
        <li>
          <ul>
            <li className="left-menu__item">
              <Link className="left-menu__link" href="/our-services">Услуги</Link>
            </li>
          </ul>
        </li>
        <li className="left-menu__item">
          <Link className="left-menu__link" href="/our-works">Работы</Link>
        </li>
        <li className="left-menu__item">
          <ul>
            <Link className="left-menu__link" href="/our-propducts">Продукты</Link>
          </ul>
        </li>
      </ul>
      <Image className="logo" width="174" height="22" alt="jetStyle" src="/img/logo_white.png"/>
      <nav className="right-menu">
        <Link className="service" href="/our-services">Услуги</Link>
        <p className="phone">8  800  256-98-97</p>
        <Image width="24" className="search" height="20" alt="jetStyle" src="/img/search.png"/>
        <Link className="lang" href="/lang-en">EN</Link>
      </nav>
    </div>
  )
}
export default Navbar;
