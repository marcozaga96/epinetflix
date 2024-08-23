import { Component } from "react";

class Gallery extends Component {
  componentDidMount = () => {
    this.myFetch();
  };
  state = {
    films: [],
  };
  myFetch = () => {
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
        this.setState({ films: arrFilms.Search.slice(0, 6) });
        console.log(arrFilms.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.films.map((film, i) => (
            <div key={i} className="col mb-2 text-center px-1">
              <img className="img-fluid" src={film.Poster} alt={film.Title} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Gallery;
