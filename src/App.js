import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllGallery from "./components/AllGallery";
import MyFooter from "./components/Myfooter";
import MyNav from "./components/MyNav";
import TvShow from "./components/TvShow";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <header>
        <MyNav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AllGallery />} />
          <Route path="/tvShow" element={<TvShow />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
