import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllGallery from "./components/AllGallery";
import MyFooter from "./components/Myfooter";
import MyNav from "./components/MyNav";
import TvShow from "./components/TvShow";

function App() {
  return (
    <>
      <header>
        <MyNav />
        <TvShow />
      </header>
      <main>
        <AllGallery />
      </main>
      <MyFooter />
    </>
  );
}

export default App;
