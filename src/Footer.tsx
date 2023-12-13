// Footer.tsx
import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="container-fluid ">
      <div className="row ">
        <div className="back-to-top">back to top</div>
      </div>
      <div className="footer-list-menu">
        <div className="row ">
          <div className="col-md-3">
            <h4>Get to Know us</h4>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Amazon Newsletter</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Make Money with Us</h4>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Amazon Newsletter</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Amazon Payment Products</h4>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Amazon Newsletter</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Let Us Help You</h4>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Amazon Newsletter</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="mid-row-footer">
        {" "}
        <div className="row ">
            <div className="col"><span>Logo</span></div>
            <div className="col"> <span>choose language</span></div>
          
         
        </div>
      </div>

      <div
        className="row copyright"
       
      >
        © 1996-2023, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
};

export default Footer;
