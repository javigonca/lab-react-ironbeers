import { Link } from "react-router-dom";

function Beers({ beers }) {
  return (
    <div>
      <h1>Beers List</h1>
      {beers.map((beer) => (
        <div key={beer.id} className="card mb-3" style={{ width: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={beer.image_url}
                style={{ width: "3rem" }}
                className="img-thumbnail rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{beer.name}</h5>
                <p className="card-text">{beer.tagline}.</p>
                <p className="card-text">{beer.contributed_by}</p>
                <Link to={`/beer/${beer.name}`} className="btn btn-outline-info">
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Beers;
