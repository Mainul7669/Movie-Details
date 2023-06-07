import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div className="container me-3">
      <div className="row">
        {shows.map((showData) => {
          const { id, name, image, rating } = showData.show;
          return (
            <div className="col-sm-6 col-md-4 col-lg-3 m-3" key={id}>
              <Card className="h-100 bg-dark text-light">
                <Card.Img
                  variant="top"
                  src={image?.medium}
                  alt={name}
                  className="card-img"
                />
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                      <span className="text-warning">{rating.average}</span>
                    </Card.Text>
                  </div>
                  <Button
                    variant="outline-info"
                    className="border-none"
                    onClick={() => navigate(`details/${id}`)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
