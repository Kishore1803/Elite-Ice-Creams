// Home Pages
import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import HeroContent from "../components/Home/HeroContent";
import ProductCard from "../components/Home/ProductCard";
import Footer from "../components/Home/Footer";
import SearchBar from "../components/Home/SearchBar";

// Images
import chocolate from "../assets/images/chocolate.png";
import vanilla from "../assets/images/vanilla.png";
import strawberry from "../assets/images/strawberry.png";
import mango from "../assets/images/mango.png";

import { BrowserRouter, Route } from "react-router-dom";

function Home() {
  const products = [
    {
      title: "Chocolate Cone",
      price: 250,
      image: chocolate,
    },

    {
      title: "Vanilla Cup",
      price: 220,
      image: vanilla,
    },

    {
      title: "Strawberry Sundae",
      price: 280,
      image: strawberry,
    },

    {
      title: "Mango Delight",
      price: 260,
      image: mango,
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <section className="container py-5">
        <h1 className="text-center mb-5">Trending Ice Creams 🍦</h1>
        <div className="row">
          {products.map((item, index) => (
            <ProductCard
              className="icecream-items-image"
              key={index}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;