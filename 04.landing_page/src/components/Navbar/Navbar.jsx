import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Ev-olution</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">
          <a
            href="https://alamtaufeeq854.github.io/react-projects/"
            target="_blank"
            rel="noopener noreferrer">
            Back
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
