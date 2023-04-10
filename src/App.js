import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Beers from "./components/Beers";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import beersService from "./services/beers";
import React, { useEffect, useState } from "react";
import Navbar from "./pages/Navbar";
import BeerDetail from "./components/BeerDetail";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    beersService
      .list()
      .then((beers) => setBeers(beers))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers beers={beers} />} />
        <Route path="/beer/:id" element={<BeerDetail beers={beers}/>} />
        <Route path="/newbeer" element={<NewBeer />} />
        <Route path="/randombeer/:id" element={<RandomBeer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
