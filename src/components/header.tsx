import headerIcon1Image from "@/common/assets/img/icon/header_icon1.png";
import logoImage from "@/common/assets/img/logo/logo.png";
import headerCardImage from "@/common/assets/img/hero/header_card.jpg";

import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="header-area">
        <div className="main-header ">
          <div className="header-top black-bg d-none d-md-block">
            <div className="container">
              <div className="col-xl-12">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="header-info-left">
                    <ul>
                      <li>
                        <Image src={headerIcon1Image} alt="header icon 1" />
                        34ºc, Sunny{" "}
                      </li>
                      <li>
                        <Image src={headerIcon1Image} alt="header icon 1" />
                        Tuesday, 18th June, 2019
                      </li>
                    </ul>
                  </div>
                  <div className="header-info-right">
                    <ul className="header-social">
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-mid d-none d-md-block">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="logo">
                    <a href="index.html">
                      <Image src={logoImage} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                  <div className="header-banner f-right ">
                    <Image src={headerCardImage} alt="header card" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-10 col-lg-10 col-md-12 header-flex">
                  <div className="sticky-logo">
                    <a href="index.html">
                      <Image src={logoImage} alt="logo" />
                    </a>
                  </div>
                  <div className="main-menu d-none d-md-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="categori.html">Category</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="latest_news.html">Latest News</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="#">Pages</a>
                          <ul className="submenu">
                            <li>
                              <a href="elements.html">Element</a>
                            </li>
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="single-blog.html">Blog Details</a>
                            </li>
                            <li>
                              <a href="details.html">Categori Details</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4">
                  <div className="header-right-btn f-right d-none d-lg-block">
                    <i className="fas fa-search special-tag"></i>
                    <div className="search-box">
                      <form action="#">
                        <input type="text" placeholder="Search" />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-md-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
