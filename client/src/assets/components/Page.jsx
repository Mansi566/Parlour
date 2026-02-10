import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


function Page() {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrolltohome = () => {
    window.scrollTo({
      top: 70,
      behavior: "smooth",
    });
  };
  const scrolltocategory = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };
  const scrolltoabout = () => {
    window.scrollTo({
      top: 1400,
      behavior: "smooth",
    });
  };
  const scrolltocontact = () => {
    window.scrollTo({
      top: 3400,
      behavior: "smooth",
    });
  };

  {
    /* <slide image> */
  }
  const images = ["/images/profile.png", "/images/message.png", "/images/product-details.png", "/images/home.png", "/images/splash.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // change image every 4 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const images1 = ["/images/message.png", "/images/product-details.png", "/images/home.png", "/images/splash.png", "/images/profile.png"];
  const [currentIndex1, setCurrentIndex1] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % images1.length);
    }, 4000); // change image every 4 seconds
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const images2 = ["/images/product-details.png", "/images/home.png", "/images/splash.png", "/images/profile.png", "/images/message.png"];
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex2((prevIndex) => (prevIndex + 1) % images2.length);
    }, 4000); // change image every 4 seconds
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const images3 = ["/images/home.png", "/images/splash.png", "/images/profile.png", "/images/message.png", "/images/product-details.png"];
  const [currentIndex3, setCurrentIndex3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex3((prevIndex) => (prevIndex + 1) % images3.length);
    }, 4000); // change image every 4 seconds
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const images4 = ["/images/splash.png", "/images/profile.png", "/images/message.png", "/images/product-details.png", "/images/home.png"];
  const [currentIndex4, setCurrentIndex4] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex4((prevIndex) => (prevIndex + 1) % images4.length);
    }, 4000); // change image every 4 seconds
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <>
      {/* <navbar> */}
      <nav className="flex justify-between items-center p-4 ">
        <div>
          <img src="/images/logo.png" alt="logo" className="w-70 px-10"  />
        </div>
        <div className="flex items-center mr-15">
          <ul className="flex space-x-7 mr-3 my-3 font-semibold">
            <li
              className="hover:text-[#F9A392]"
              onClick={scrolltohome}
              style={{ cursor: "pointer" }}
            >
              Home
            </li>
            <li
              className="hover:text-[#F9A392]"
              onClick={scrolltocategory}
              style={{ cursor: "pointer" }}
            >
              Category
            </li>
            <li
              className="hover:text-[#F9A392]"
              onClick={scrolltoabout}
              style={{ cursor: "pointer" }}
            >
              About Us
            </li>
            <li
              className="hover:text-[#F9A392]"
              onClick={scrolltocontact}
              style={{ cursor: "pointer" }}
            >
              Contact Us
            </li>
          </ul>
          <button className="bg-[#a94ef0] text-white px-4 py-2 space-x-2 mr-3 rounded-lg hover:bg-[#b365f0]">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-[#a94ef0] text-white px-4 py-2 space-x-2 rounded-lg hover:bg-[#b365f0]">
            <Link to="/download">DownloadApp</Link>
          </button>
        </div>
      </nav>
      {/* <header> */}
      <header className="text-center">
        <div className="w-full">
          <img
            className="position-relative w-full h-full"
            src="/images/hero-section.png"
            alt="Hero Section"
            style={{
              objectFit: "cover",
              position: "relative",
              filter: "brightness(0.5)",
            }}
          />
        </div>
        <div
          className="absolute top-50 left-1/2 transform -translate-x-1/2 
         flex flex-col items-center"
        >
          <img
            src="/images/logo-copy.png"
            alt="Logo Copy"
            className="w-50 h-50 justify-center mt-11"
            style={{ objectFit: "fill" }}
          />
          <h3
            className="display-3 text-capitalize text-white mt-2 mb-5 text-6xl font-bold"
            style={{ fontFamily: "'Baloo Bhaijaan'" }}
          >
            THE PARLOUR
          </h3>
          <p
            className="text-white text-lg font-medium"
            style={{ fontFamily: "'Baloo Bhaijaan'" }}
          >
            The Parlour is a simple marketplace to buy and sell pre-loved
            clothes, shoes, watches and <br />
            accessories. Upload items quickly, explore affordable finds and chat
            with sellers for easy,
            <br />
            budget-friendly fashion trading.
          </p>
        </div>
      </header>
      {/* <part-1> */}
      <div className="flex flex-col my-55 text-center">
        <div>
          <h1 className="font-bold text-3xl">Category</h1>
          <p className="text-sm text-[#777] mt-2">
            Find trendy pre-loved clothes for men, women, and kids. Affordable
            fashion at your fingertips.
          </p>
        </div>
        <div className="grid grid-cols-7 gap-8 w-180  mx-auto mt-10">
          <div>
            <Link to="/hair">
              <img
                src="/group-2085662945.png"
                alt="missing"
                width="100"
                height="100"
                style={{ cursor: "pointer" }}
                className="hover:translate-x-1 hover:scale-110 transition ease-in-out"
              />
            </Link>
          </div>
          <div>
            <Link to="/shoes">
              <img
                src="/images/group-2085662932.png"
                alt="missing"
                width="100"
                height="100"
                style={{ cursor: "pointer" }}
                className="hover:translate-x-1 hover:scale-110 transition ease-in-out"
              />
            </Link>
          </div>
          <div>
            <Link to="/gown">
              <img
                src="/images/group-2085662933.png"
                alt="missing"
                width="100"
                height="100"
                style={{ cursor: "pointer" }}
                className="hover:translate-x-1 hover:scale-110 transition ease-in-out"
              />
            </Link>
          </div>
          <div>
            <Link to="/tshirt">
              <img
                src="/images/group-2085662934.png"
                alt="missing"
                width="100"
                height="100"
                style={{ cursor: "pointer" }}
                className="hover:translate-x-1 hover:scale-110 transition ease-in-out"
              />
            </Link>
          </div>
          <div>
            <Link to="/watches">
              <img
                src="/images/group-2085662935.png"
                alt="missing"
                width="100"
                height="100"
                style={{ cursor: "pointer" }}
                className="hover:translate-x-1 hover:scale-110 transition ease-in-out"
              />
            </Link>
          </div>
          <div>
            <Link to="/earrings">
              <img
                src="/images/group-2085662936.png"
                alt="missing"
                width="100"
                height="100"
                style={{ cursor: "pointer" }}
                className="hover:translate-x-1 hover:scale-110 transition ease-in-out"
              />
            </Link>
          </div>
          <div>
            <Link to="/kurti">
              <img
                src="/images/group-2085662942.png"
                alt="missing"
                width="100"
                height="100"
                style={{ cursor: "pointer" }}
                className="hover:translate-x-1 hover:scale-110 transition ease-in-out"
              />
            </Link>
          </div>
          <div>
            <Link to="/jewellery">
              <img
                src="/images/group-2085662947.png"
                alt="missing"
                width="100"
                height="100"
                style={{ cursor: "pointer" }}
                className="hover:translate-x-1 hover:scale-110 transition ease-in-out"
              />
            </Link>
          </div>
          <div>
            <Link to="/nailpaint">
              <img
                src="/images/group-2085662937.png"
                alt="missing"
                width="100"
                height="100"
                style={{ cursor: "pointer" }}
                className="hover:translate-x-1 hover:scale-110 transition ease-in-out"
              />
            </Link>
          </div>
          <div>
            <Link to="/chniyacholi">
              <img
                src="/images/group-2085662938.png"
                alt="missing"
                width="100"
                height="100"
                style={{ cursor: "pointer" }}
                className="hover:translate-x-1 hover:scale-110 transition ease-in-out"
              />
            </Link>
          </div>
          <div>
            <Link to="/saree">
              <img
                src="/images/group-2085662939.png"
                alt="missing"
                width="100"
                height="100"
                style={{ cursor: "pointer" }}
                className="hover:translate-x-1 hover:scale-110 transition ease-in-out"
              />
            </Link>
          </div>
          <div>
            <Link to="/purse">
              <img
                src="/images/group-2085662940.png"
                alt="missing"
                width="100"
                height="100"
                style={{ cursor: "pointer" }}
                className="hover:translate-x-1 hover:scale-110 transition ease-in-out"
              />
            </Link>
          </div>
          <div>
            <Link to="/mehndi">
              <img
                src="/images/group-2085662941.png"
                alt="missing"
                width="100"
                height="100"
                style={{ cursor: "pointer" }}
                className="hover:translate-x-1 hover:scale-110 transition ease-in-out"
              />
            </Link>
          </div>
          <div>
            <Link to="/pants">
              <img
                src="/images/group-2085662943.png"
                alt="missing"
                width="100"
                height="100"
                style={{ cursor: "pointer" }}
                className="hover:translate-x-1 hover:scale-110 transition ease-in-out"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <About> */}
      <div class="container-fluid px-10 my-65">
        <div className="w-full px-20 flex md:flex-row justify-center items-center">
          {/* <left part> */}
          <div className="w-1/2 flex justify-center items-center">
            <img
              className="w-4/5 h-1/2 ml-15"
              src="/images/about.png"
              alt="missing"
              style={{ borderRadius: "15px" }}
            />
          </div>
          {/* <right part> */}
          <div className="w-1/2">
            <div>
              <h1
                className="font-bold text-2xl text-black"
                style={{ fontFamily: "baloo bhaijaan" }}
              >
                About Us
              </h1>
              <p
                className="text-sm text-[#777] mt-4 border-l border-[#F9A392] pl-6 w-120"
                style={{ fontFamily: "'Baloo Bhaijaan'" }}
              >
                The Parlour is a modern marketplace created to give pre-loved
                fashion a fresh new life. We make it simple for anyone to buy
                and sell clothing, watches, shoes, choli, accessories and
                lifestyle items in a safe and user-friendly way. Our platform
                connects people who want to clear their wardrobe with those
                looking for stylish, affordable finds.
                <br />
                <br />
                With quick product uploads, smart categories, secure profiles
                and instant chat, The Parlour offers a smooth experience from
                browse to buy. We believe in sustainable fashion, smart savings
                and giving every item a second chance.
                <br />
                <br />
                Join The Parlour and discover a community where fashion moves
                forward—responsibly, affordably and effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Part-2> */}
      <div className="py-8">
        <div className="mx-21">
          <div className="p-3">
            <h1
              className="text-center font-bold text-4xl"
              style={{ fontFamily: "'baloo-bhaijaan'" }}
            >
              The Parlour App
            </h1>
          </div>
        </div>
      </div>
      {/* <slide page> */}
      <div>
        <div>
          <div>
            <div className="flex absolute top-595 left-25 z-1 space-x-10">
              <img
                width={230}
                height={250}
                src={`/images/${images3[currentIndex3]}`}
                alt="slideshow-3"
                className="object-cover rounded-md"
                style={{ filter: "blur(1px) brightness(1.1)" }}
              />
              <img
                width={230}
                height={250}
                src={`/images/${images4[currentIndex4]}`}
                alt="slideshow-4"
                className="object-cover rounded-md"
                style={{ filter: "blur(1px) brightness(1.1)" }}
              />
            </div>
            <div className="flex absolute top-595 left-162 z-1 space-x-10">
              <img
                width={230}
                height={250}
                src={`/images/${images[currentIndex]}`}
                alt="slideshow"
                className="object-cover rounded-md"
              />
              <img
                width={230}
                height={250}
                src={`/images/${images1[currentIndex1]}`}
                alt="slideshow-1"
                className="object-cover rounded-md"
                style={{ filter: "blur(1px) brightness(1.1)" }}
              />

              <img
                width={230}
                height={250}
                src={`/images/${images2[currentIndex2]}`}
                alt="slideshow-2"
                className="object-cover rounded-md"
                style={{ filter: "blur(1px) brightness(1.1)" }}
              />
            </div>
          </div>
          <div>
            <img
              loading="lazy"
              decoding="async"
              width={255}
              height={250}
              src="/images/new-mobile.png"
              alt=""
              className="justify-self-center-safe position-relative"
            />
          </div>
          {/* Radio Buttons */}
          <div className="flex justify-center space-x-4 mt-4">
            {images.map((_, index) => (
              <input
                key={index}
                type="radio"
                name="slider"
                checked={currentIndex === index}
                onChange={() => setCurrentIndex(index)}
                className="w-3 h-3 color-[#59BF72] cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>

      {/* <Part-3> */}
      <div className="text-center my-50">
        <h3
          className="font-bold text-3xl"
          style={{ fontFamily: "'Baloo Bhaijaan'" }}
        >
          Get the Parlour on the
        </h3>
        <div className="flex justify-center items-center space-x-2 mt-3">
          <img src="/images/group.png" alt="missing" className="w-60 h-45" />
          <img src="/images/ios.png" alt="missing" className="w-60 h-45" />
        </div>
      </div>
      {/* <Part-4> */}
      <div className="py-10 my-30">
        <div className="flex flex-wrap justify-center items-start gap-16 max-w-[1100px] mx-auto">
          {/* Left Content */}
          <div className="flex-1 min-w-[350px] max-w-[400px]">
            <h2 className="text-[32px] font-bold leading-tight mb-2 font-[Baloo_Bhaijaan]">
              Discuss Your
              <br />
              Chemical
              <br />
              Solutions Needs
            </h2>
            <p className="text-gray-500 text-[13px] mb-8 font-[Baloo_Bhaijaan]">
              Get in touch with us to discuss your chemical solution needs.
            </p>

            {/* Email */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#a94ef0] rounded-full flex items-center justify-center text-white text-lg mr-3">
                <img
                  src="/images/mail.png"
                  alt="Email"
                  loading="lazy"
                  decoding="async"
                  className="w-5 h-5"
                />
              </div>
              <p className="m-0 font-[Baloo_Bhaijaan] text-black font-semibold">
                contact@uptechwebsolutions.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#a94ef0] rounded-full flex items-center justify-center text-white text-lg mr-3">
                <img
                  src="/images/phone.png"
                  alt="Phone"
                  loading="lazy"
                  decoding="async"
                  className="w-5 h-5"
                />
              </div>
              <p className="m-0 font-[Baloo_Bhaijaan] text-black font-semibold">
                +91 971400 22728, +91 88663 14513
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex-1 min-w-[400px] max-w-[450px] bg-white border border-gray-200 rounded-xl p-8 shadow-md">
            <form>
              <div className="mb-5">
                <label className="font-semibold font-[Baloo_Bhaijaan]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2.5 border border-gray-200 rounded-md mt-1 bg-gray-100 font-[Baloo_Bhaijaan] focus:outline-none focus:ring-2 focus:ring-[#a94ef0]"
                />
              </div>

              <div className="mb-5">
                <label className="font-semibold font-[Baloo_Bhaijaan]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2.5 border border-gray-200 rounded-md mt-1 bg-gray-100 font-[Baloo_Bhaijaan] focus:outline-none focus:ring-2 focus:ring-[#a94ef0]"
                />
              </div>

              <div className="mb-5">
                <label className="font-semibold font-[Baloo_Bhaijaan]">
                  Description
                </label>
                <textarea
                  placeholder="Type here..."
                  rows="5"
                  className="w-full p-2.5 border border-gray-200 rounded-md mt-1 bg-gray-100 font-[Baloo_Bhaijaan] focus:outline-none focus:ring-2 focus:ring-[#a94ef0]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#a94ef0] text-white border-none py-2.5 px-5 rounded-md font-semibold cursor-pointer font-[Baloo_Bhaijaan] hover:bg-[#922eea] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/*  <footer>  */}
      <footer className="relative bg-[#211E1C] text-white text-center px-4 mt-22.50">
        <div className="mx-44 px-4 pt-10 pb-6">
          <div className="flex flex-col md:flex-row justify-around ">
            {/* <footer left part> */}
            <div className="w-1/2 flex justify-start items-center">
              <div>
                <img
                  src="/images/logo.png"
                  alt="The Parlour Logo"
                  className="w-92 h-23"
                />
                <a href="#" className="">
                  <p className="text-left text-lg text-[#F9A392] hover:text-[#e0593a] font-normal mt-5">
                    The Parlour is a trusted marketplace for buying and selling
                    pre-loved <br /> clothing, shoes, watches and lifestyle
                    items. We offer <br /> a simple, safe and affordable way to
                    trade fashion online. Discover <br /> great deals, clear
                    your wardrobe and support sustainable <br /> shopping with
                    ease.
                  </p>
                </a>
                <div className="mt-6">
                  <a
                    href="#"
                    className="btn btn-lg btn-primary btn-lg-square w-11 h-11 flex justify-center
                     items-center bg-[#F9A392] hover:bg-[#fc876a] text-white text-2xl"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
            {/* <border line> */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-[#ffffff26]"></div>
            {/* <footer right part> */}
            <div className="w-1/2 flex flex-col md:flex-col items-start pl-10 pt-25">
              {/* <first part> */}
              <div className="px-4 mb-12">
                <div>
                  <h1
                    className="text-xl font-normal mb-6 uppercase"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Quick Links
                  </h1>
                </div>

                <div className="flex flex-col text-left text-[#cccccc] space-y-2">
                  <button
                    className="flex items-center gap-2 hover:underline cursor-pointer"
                    onClick={scrolltohome}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    <span>Home</span>
                  </button>

                  <button
                    className="flex items-center gap-2 hover:underline cursor-pointer"
                    onClick={scrolltocategory}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    <span>Category</span>
                  </button>

                  <button
                    className="flex items-center gap-2 hover:underline cursor-pointer"
                    onClick={scrolltoabout}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    <span>About Us</span>
                  </button>

                  <button
                    className="flex items-center gap-2 hover:underline cursor-pointer"
                    onClick={scrolltocontact}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    <span>Contact Us</span>
                  </button>
                </div>
              </div>
              {/* <second part> */}
              <div className="px-4 mb-12">
                <div>
                  <h1
                    className="text-xl text-start font-normal mb-6 uppercase"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Newsletter
                  </h1>
                </div>
                <div className="w-150 flex flex-row text-left text-[#cccccc] space-y-4">
                  <div>
                    <input
                      type="email"
                      className="w-100 p-3 rounded-md mt-1 bg-gray-100 text-black focus:outline-none
                       focus:ring-2 focus:ring-[#F9A392]"
                      placeholder="Your Email Address"
                    />
                  </div>
                  <div>
                    <button
                      className="bg-black text-white px-5 py-3 mt-1 rounded-4xl font-medium
                     hover:bg-[#F9A392] transition-colors duration-200 border-[#F9A392] border-1"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-[#ffffff26] mx-full left-0" />
        {/* <last line> */}
        <div className="flex flex-col w-full md:flex-row place-content-around py-6 px-4">
          <div className="w-1/2 text-md-left">
            <p className="m-0 text-white px-4">
              &copy;
              <a
                href="#"
                className="text-[#F9A392] hover:text-[#dc3545] hover:underline"
              >
                Your Site Name
              </a>
              . All Rights Reserved.
            </p>
          </div>

          <div className="w-1/2 text-md-right mb-md-0">
            <p className="m-0 text-white px-4">
              Designed by{" "}
              <a
                href="https://htmlcodex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9A392] hover:text-[#dc3545] hover:underline"
              >
                HTML Codex
              </a>
            </p>
          </div>
        </div>
      </footer>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-6 bg-[#046bd2] text-white p-1.5 rounded-sm shadow-lg hover:bg-[#046bd2] transition-all cursor-pointer"
        >
          <FontAwesomeIcon icon={faAngleRight} rotation={270} size="lg" />
        </button>
      )}
    </>
  );
}
export default Page;