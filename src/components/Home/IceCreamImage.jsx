import heroIceCream from "../../assets/images/hero-icecream.png";
import React from "react";

function IceCreamImage() {
  return (
    <div>
      <img
        src={heroIceCream}
        alt="Ice Cream"
        className="ice-cream-image"
      />
    </div>
  );
}

export default IceCreamImage;