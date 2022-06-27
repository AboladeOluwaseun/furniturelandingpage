import React from "react";
import Twitter from "../../Assets/FooterAssets/twitter.png";
import Instagram from "../../Assets/FooterAssets/instagram.png";
import linkedIn from "../../Assets/FooterAssets/linkedin.png";
import Youtube from "../../Assets/FooterAssets/youtube.png";
import Facebook from "../../Assets/FooterAssets/facebook.png";
import paypal from "../../Assets/FooterAssets/paypal.png";
import visa from "../../Assets/FooterAssets/visa.png";
import master1 from "../../Assets/FooterAssets/master-1.png";
import master2 from "../../Assets/FooterAssets/master-2.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="inquires">
            <p>Terms of Service</p>
            <p>Refund Policy</p>
            <p>FAQS</p>
          </div>
          <div className="socials">
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
            <img src={linkedIn} alt="" />
            <img src={Youtube} alt="" />
            <img src={Facebook} alt="" />
          </div>
          <div className="contact">
            <p className="copyright">
              <span>c</span>2022 foniso
            </p>
            <p className="right">
              All rights reserved | (+234)71564389 | foniso@foniso.com
            </p>
          </div>
          <div className="payment-options">
            <img className="paypal" src={paypal} alt="" />
            <img className="visa" src={visa} alt="" />
            <div className="mastercard">
              <img src={master2} alt="" />
              <img className="master1" src={master1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
