import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllGallery from "./components/AllGallery";
import MyNav from "./components/MyNav";

function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main>
        <AllGallery />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
