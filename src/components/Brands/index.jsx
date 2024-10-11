import React from "react";
import "./index.css";
function Brands() {
  return (
    <div>
      <h2 className="heading">
        Creative solutions. Exceptional results <br /> Assisting brands succeed
        through every challenge.
      </h2>

      <div className="grid-container">
        <div className="grid-item">
          <div className="img">
            <img
              src="https://constantinougroup.com/wp-content/uploads/2024/09/branding.png"
              alt="Branding"
              className="icon-small"
            />
          </div>
          <h2 className="h2">Branding & Design</h2>
          <div className="content">
            <p className="para">
              From bold new logos to refreshing existing ones, brand guidelines,
              and complete visual identity systems, we cover everything to
              elevate your brand.
            </p>
          </div>
        </div>

        <div className="grid-item">
          <div className="img">
            <img
              src="https://constantinougroup.com/wp-content/uploads/2024/09/product-creation.png"
              alt="Product Creation"
              className="icon-small"
            />
          </div>
          <h2 className="h2">Product Creation</h2>
          <div className="content">
            <p className="para">
              We take your product from concept to completion, handling design,
              development, and launch to deliver innovative solutions that meet
              your business goals.
            </p>
          </div>
        </div>

        <div className="grid-item">
          <div className="img">
            <img
              src="https://constantinougroup.com/wp-content/uploads/2024/09/digital-martketing.png"
              alt="Digital Development"
              className="icon-small"
            />
          </div>
          <h2 className="h2">Digital Development</h2>
          <div className="content">
            <p className="para">
              Designing, developing, and launching websites and apps that
              provide seamless user experiences and drive business growth from
              start to finish.
            </p>
          </div>
        </div>

        <div className="grid-item">
          <div className="img">
            <img
              src="https://constantinougroup.com/wp-content/uploads/2024/09/advertising.png"
              alt="Digital Marketing"
              className="icon-small"
            />
          </div>
          <h2 className="h2">Digital Marketing</h2>
          <div className="content">
            <p className="para">
              Tailored strategies are crafted and executed to drive brand
              awareness, engagement, and growth through targeted campaigns
              across social media, search, and digital platforms.
            </p>
          </div>
        </div>

        <div className="grid-item">
          <div className="img">
            <img
              src="https://constantinougroup.com/wp-content/uploads/2024/09/app-development.png"
              alt="Advertising"
              className="icon-small"
            />
          </div>
          <h2 className="h2">Advertising</h2>
          <div className="content">
            <p className="para">
              Bold, guerrilla-style campaigns are crafted to reach the right
              audience, maximising visibility and engagement across digital,
              print, and unconventional platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
