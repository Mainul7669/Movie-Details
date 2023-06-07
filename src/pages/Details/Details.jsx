import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Details = () => {
  const { id} = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setMovieData(data));
  }, [id]);

  if (!movieData) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const { image, name, rating, summary, updated, _links, previousepisode, schedule, premiered, genres,language} = movieData;


  return (
    <div className="container text-light">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <Card className="bg-dark text-light">
          <Card.Img src={image?.original} alt={name} className="img-fluid mb-3" />
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between">
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <span className="text-warning">{rating?.average}</span>
              </Card.Text>
            </div>
            <Card.Text>Genres: {genres.join(", ")}</Card.Text>
            <Card.Text>Updated: {updated}</Card.Text>
            <Card.Text>Language: {language}</Card.Text>
            <Card.Text>Premiered: {premiered}</Card.Text>
            <Card.Text>Schedule: {schedule.days} {schedule.time}</Card.Text>
            <Card.Text>Links: <span className="text-primary">{_links.self?.href}</span></Card.Text>
            <Card.Text>Previous Episode: {previousepisode?.href}</Card.Text>
            <Card.Text>Description: {summary}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
  );
};

export default Details;
