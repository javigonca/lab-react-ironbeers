import React from 'react'
import { useParams } from 'react-router-dom'

function BeerDetail({ beers }) {
  const params = useParams();
  const beerDetail = beers.filter((beer) => beer.name === params.id)


  return (
   
    <div className="card mb-3 mt-5" style={{ width: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={beerDetail[0].image_url}
                style={{ width: "20rem" }}
                className="img-thumbnail rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{beerDetail[0].name}</h1>
                <h4 className="card-text">{beerDetail[0].tagline}.</h4>
                <h5 className="card-text">{beerDetail[0].first_brewed}</h5>  
                <p className="card-text">{beerDetail[0].attenuation_level}</p>
                <p className="card-text">{beerDetail[0].description}</p>
                <p className="card-text">{beerDetail[0].contributed_by}</p>             
              </div>
            </div>
          </div>
        </div>
   
  )
}

export default BeerDetail