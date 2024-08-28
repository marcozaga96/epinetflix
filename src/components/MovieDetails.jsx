import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Spinner, Alert, Row, Col } from "react-bootstrap";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          //   `https://striveschool-api.herokuapp.com/api/comments/${movieId}`,
          `https://www.omdbapi.com/?apikey=5ace13d8&s=${movieId}`
        );
        if (!response.ok) {
          throw new Error("Errore nel recupero dei dettagli del film");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${movieId}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjNmQ5YWZkZWUzZDAwMTU5YmRlZWMiLCJpYXQiOjE3MjQ4NTUyMjgsImV4cCI6MTcyNjA2NDgyOH0.-AFwjZH1qmFsuPfwzIWt0g2H_M01wnSw0AqduohtQRk",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Errore nel recupero dei commenti");
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchMovieDetails();
    fetchComments();
  }, [movieId]);

  if (isLoading) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Spinner animation="border" variant="info" />
          </Col>
        </Row>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Alert variant="danger">Oops! Qualcosa è andato storto</Alert>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      {movie && (
        <div>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt={movie.Title} />
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Rated:</strong> {movie.Rated}
          </p>
          <h2>Comments</h2>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index}>
                <p>
                  <strong>{comment.author}</strong>:
                  <p>
                    <strong>Comment:</strong> {comment.comment}
                  </p>
                  <p>
                    <strong>Rate:</strong> {comment.rate}
                  </p>
                </p>
              </div>
            ))
          ) : (
            <p>Nessun commento trovato</p>
          )}
        </div>
      )}
    </Container>
  );
};

export default MovieDetails;
