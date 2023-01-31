import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61T-RGcP39L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="79637995"
            title="Echo Show 8 (2nd Gen) Adjustable Stand - Charcoal"
            price={24.99}
            image="https://m.media-amazon.com/images/I/319zRmwsfkS._AC_SR400,600_.jpg"
            rating={5}
          />
          <Product
            id="60773504"
            title="JBL Flip 4, Black - Waterproof, Portable & Durable Bluetooth Speaker - Up to 12 Hours of Wireless Streaming - Includes Noise-Cancelling Speakerphone, Voice Assistant & JBL Connect+"
            price={110.95}
            image="https://m.media-amazon.com/images/I/61d5F64UDpL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="74263750"
            title="Hydro Flask Standard Mouth Bottle with Flex Cap"
            price={39.95}
            image="https://m.media-amazon.com/images/I/51kMwwQ+nBL._AC_SX679_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="85101860"
            title="Oster 2-Slice Toaster with Advanced Toast Technology, Stainless Steel"
            price={39.99}
            image="https://m.media-amazon.com/images/I/81ZP258ISCL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="74175356"
            title="Carhartt Men's Loose Fit Heavyweight Short-Sleeve Pocket T-Shirt"
            price={19.99}
            image="https://m.media-amazon.com/images/I/81FZSo5m-2L._AC_UY879_.jpg"
            rating={5}
          />
          <Product
            id="59378713"
            title="Ceaco - Thomas Kinkade - Disney Holiday - Midnight Delivery - 1000 Piece Jigsaw Puzzle"
            price={12.99}
            image="https://m.media-amazon.com/images/I/91T5GN-5TmL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="84360307"
            title="LEGO Ninjago Kai’s Fire Dragon EVO 71762 Building Toy Set for Kids, Boys, and Girls Ages 6+ (204 Pieces)"
            price={34.99}
            image="https://m.media-amazon.com/images/I/81wWym7wJhL._AC_SX679_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="69510041"
            title="Nintendo Switch™ with Neon Blue and Neon Red Joy‑Con™"
            price={299.99}
            image="https://m.media-amazon.com/images/I/71UiJ0O6vTL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="98898683"
            title="SAMSUNG 75-Inch Class QLED Q60B Series - 4K UHD Dual LED Quantum HDR Smart TV with Xbox Game Pass and Alexa Built-in (QN75Q60BAFXZA, 2022 Model)"
            price={1397.99}
            image="https://m.media-amazon.com/images/I/81inMIbTO9L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
