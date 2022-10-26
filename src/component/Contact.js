import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaRegEnvelopeOpen,
  FaPhoneVolume,
  FaFax,
  FaHouzz,
} from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container text-center">
      <hr />
      <div className="card my-1 mx-1 px-5 py-5 bg-secondary">
        <div className="card-body">
          <h5 className="card-title text-light">
            Verbinden Sie sich mit uns in sozialen Netzwerken
          </h5>
          <div className="sozial-link">
            <a href="https://www.facebook.com/profile.php?id=100012827537894">
              <FaFacebook className="face" />
            </a>
            <a href="https://twitter.com/?lang=de">
              <FaTwitter className="twitter" />
            </a>
            <a href="https://www.youtube.com/">
              <FaYoutube className="youtube" />
            </a>
            <a href="https://github.com/FbW-D02-1/git-github-grundlagen-AhyamAzoubi">
              <FaGithub className="github" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="instagram" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="contact">
        <p>
          <a href="https://www.google.de/maps/place/Wismar/@53.9038827,11.3224016,11z/data=!4m5!3m4!1s0x47adb8966ba236df:0x4251ae8ad8482e0!8m2!3d53.8879706!4d11.4621371?hl=en-GB&authuser=0">
            <FaHouzz className="house" /> WISMAR 23966, DEUTSCHLAND
          </a>
        </p>
        <p>
          <a href="https://www.google.com/intl/de/gmail/about/">
            <FaRegEnvelopeOpen className="mail" /> ahyam.azoubi@gmail.com
          </a>
        </p>

        <p>
          <FaPhoneVolume className="phone" /> +49 15 786 392 782
        </p>
        <p>
          <FaFax className="fax" />
          +49 15 786 392 783
        </p>
      </div>
      <hr />
      <p>© 2022 Copyright by COLLECTION</p>
      <hr />
    </div>
  );
};

export default Contact;
