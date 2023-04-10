import React from "react";
import Image1 from "../assets/beers.png";
import Image2 from "../assets/random-beer.png";
import Image3 from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5 pb-5">      
      <div className="card" style={{ width: "20rem" }}>
        <img src={Image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to="/beers" className="btn btn-outline-dark">
            All Beers
          </Link>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "20rem" }}>
        <img src={Image2} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to="/randombeer/Trashy Blonde" className="btn btn-outline-dark">
            Random Beer
          </Link>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="card" style={{ width: "20rem" }}>
          <img src={Image3} className="card-img-top" alt="..." />
          <div className="card-body">
            <Link to="/newbeer" className="btn btn-outline-dark">
              New Beer
            </Link>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
