"use client";

import { LogOut, UserCircle } from "lucide-react";

import { BannerGifs } from "@/widgets/gifs/banner-gifs";
import Image from "next/image";
import Link from "next/link";
import headerIcon1Image from "@/common/assets/img/icon/header_icon1.png";
import logoImage from "@/common/assets/img/logo/logo.png";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "next/navigation";

// import headerCardImage from "@/common/assets/img/hero/header_card.jpg";

export const Header = () => {
  const account = useAuthStore((store) => store.account);
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);
  const logout = useAuthStore((store) => store.logout);
  const router = useRouter();

  return (
    <header>
      <div className="header-area">
        <div className="main-header ">
          <div className="header-top black-bg">
            <div className="container">
              <div className="col-xl-12">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="header-info-left">
                    <ul>
                      {/* <li>
                        <Image
                          src={headerIcon1Image}
                          alt="header icon 1"
                        />
                        34ºc, Sunny{" "}
                      </li> */}
                      <li>
                        <Image
                          unoptimized
                          src={headerIcon1Image}
                          alt="header icon 1"
                        />
                        Tuesday, 18th June, 2019
                      </li>
                    </ul>
                  </div>
                  <div className="header-info-right flex items-center gap-10">
                    {/* <ul className="header-social">
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
                    </ul> */}

                    <div className="flex items-center gap-4">
                      {isAuthenticated ? (
                        <>
                          <button
                            onClick={() => router.push("/login")}
                            className="flex items-center gap-2 text-white hover:!text-primary"
                          >
                            <UserCircle className="size-5" />
                            <span
                              hidden={!isAuthenticated}
                              className="hidden md:block"
                            >
                              {account?.email}
                            </span>
                          </button>
                          <button
                            hidden={!isAuthenticated}
                            onClick={logout}
                            className="text-white hover:!text-primary"
                          >
                            <LogOut className="size-5 text-inherit" />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => router.push("/login")}
                          className="flex items-center gap-2 text-white hover:!text-primary"
                        >
                          <UserCircle className="size-5" />
                          <span className="text-sm">Tizimga kirish</span>
                        </button>
                      )}
                    </div>
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
                    <Link href="/">
                      <Image
                        unoptimized
                        src={logoImage}
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 hidden lg:block">
                  <div className="relative header-banner f-right h-28 overflow-hidden">
                    <BannerGifs />
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
                    <Link href="/">
                      <Image
                        unoptimized
                        src={logoImage}
                        alt="logo"
                        height={64}
                      />
                    </Link>
                  </div>
                  {/* <div className="main-menu d-none d-md-block">
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
                  </div> */}
                </div>
                {/* <div className="col-xl-2 col-lg-2 col-md-4">
                  <div className="header-right-btn f-right d-none d-lg-block">
                    <i className="fas fa-search special-tag"></i>
                    <div className="search-box">
                      <form action="#">
                        <input
                          type="text"
                          placeholder="Search"
                        />
                      </form>
                    </div>
                  </div>
                </div> */}
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
