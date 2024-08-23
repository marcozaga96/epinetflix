import "bootstrap-icons/font/bootstrap-icons.css";
const TvShow = function () {
  return (
    <div
      className="d-flex justify-content-between px-4"
      style={{ backgroundColor: "#221f1f" }}
    >
      <div className="d-flex">
        <h2 className="mb-4 text-light">TV Shows</h2>
        <div className="btn-group" role="group">
          <div className="dropdown ms-4 mt-1">
            <button
              type="button"
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: "#221f1f" }}
            >
              Genres
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Comedy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Drama
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Thriller
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <i className="bi bi-grid icons text-light "></i>
        <i className="bi bi-grid-3x3 icons text-light mx-4"></i>
      </div>
    </div>
  );
};
export default TvShow;
