import { Component } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";

class Gallery extends Component {
  componentDidMount = () => {
    this.myFetch();
  };
  state = {
    films: [],
    isLoading: false,
    isError: false,
  };
  myFetch = () => {
    this.setState({ isLoading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=5ace13d8&s=${this.props.singleGallery}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore!");
        }
      })
      .then((arrFilms) => {
        this.setState({ films: arrFilms.Search.slice(0, 6), isLoading: false });
        console.log(arrFilms.Search);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false, isError: true });
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col xs lg="2">
              {this.state.isLoading && (
                <Spinner animation="border" variant="info" />
              )}
              {this.state.isError && (
                <Alert variant="danger">Oops! Qualcosa è andato storto</Alert>
              )}
            </Col>
          </Row>
        </Container>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 ">
          {this.state.films.map((film, i) => (
            <div key={i} className="col mb-2 text-center px-1">
              <img
                className="img-fluid w-75"
                src={film.Poster}
                alt={film.Title}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Gallery;
