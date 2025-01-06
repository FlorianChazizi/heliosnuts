import React from "react";
import "../styles/aboutus.css"; // Import the CSS file for styling

const AboutUs: React.FC = () => {
  return (
    <section className="about">
      <div className="content">
        <h1>The Company</h1>
        <p>
          The Dry Nuts Helios company is based in Greece, Larissa city, and trades Greek dry nuts, dried fruits, and snacks since 1986.
          All products are chosen carefully and packed with responsibility to ensure their high quality and freshness. 
          The purpose of our company is to please and satisfy our customers.
        </p>
        <p>
          We trade Greek dry nuts like almonds in many varieties: roasted or raw, salted or unsalted, roasted hazelnuts, roasted pistachios with salt or without, roasted peanuts with red skin and salt, peanuts with salt, roasted chickpeas, pumpkin seeds, sunflower seeds, walnuts, and corn.
        </p>
        <p>
          Crunchy snacks include coated peanuts with different flavors like chili, paprika, tomato basil, or cheese and bacon. We also offer toasted corn with salt or BBQ flavor.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
