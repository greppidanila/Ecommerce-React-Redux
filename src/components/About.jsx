import React from "react";
import AboutImage from "../assets/about.jpg"

const About = ( ) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center my-5">
          <div className="col-md-4">
            <h2 className="fw-bold mb-4">About Us</h2>
            <p className="mb-4">
              We are a team of passionate ecommerce experts who are dedicated to
              providing our customers with the best possible shopping
              experience. Our mission is to offer high-quality products at
              affordable prices, and to make shopping easy and convenient for
              everyone.
            </p>
            <p className="mb-4">
              With our user-friendly website and helpful customer support, you
              can shop with confidence knowing that we are always here to help.
              We value your feedback and strive to improve our services every
              day.
            </p>
            <p className="mb-4">
              Thank you for choosing us as your go-to online store. We look
              forward to serving you!
            </p>
          </div>
          <div className="col-md-4">
            <img src={AboutImage} alt="about us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
