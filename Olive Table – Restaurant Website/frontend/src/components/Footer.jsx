import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">
            THE OLIVE TABLE
            <p style={{ fontSize: "12px", fontWeight: "normal" }}>
              Fresh ingredients, exceptional food, unforgettable moments.
            </p>
          </div>
          <div className="right">
            <p>Mumbai, Maharashtra, India</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>© 2026 The Olive Table. All rights reserved.</p>
          </div>
          <div className="right">
            <p>Made with love for great food and memorable experiences.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
