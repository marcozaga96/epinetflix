import { Component } from "react";
import Gallery from "./Gallery";

class AllGallery extends Component {
  state = {
    firstGallery: "Harry Potter",
    secondGallery: "star wars",
    thirdGallery: "pirates of the caribbean",
  };
  render() {
    return (
      <div className="px-4" style={{ backgroundColor: "#221f1f" }}>
        <h4 className="text-light">Trending Now</h4>
        <Gallery singleGallery={this.state.firstGallery} />
        <h4 className="text-light">Watch it Again</h4>
        <Gallery singleGallery={this.state.secondGallery} />
        <h4 className="text-light">New Releases</h4>
        <Gallery singleGallery={this.state.thirdGallery} />
      </div>
    );
  }
}
export default AllGallery;
