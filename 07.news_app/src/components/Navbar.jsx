const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span
            className="badge bg-light text-dark fs-4"
            onClick={() => {
              setCategory("general");
            }}>
            News
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  setCategory("technology");
                }}>
                Technology
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  setCategory("business");
                }}
                href="#">
                Business
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  setCategory("health");
                }}>
                Health
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  setCategory("science");
                }}
                href="#">
                Science
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  setCategory("sports");
                }}>
                Sports
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  setCategory("entertainment");
                }}
                href="#">
                Entertainment
              </a>
            </li>
          </ul>
        </div>

        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">Back</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
