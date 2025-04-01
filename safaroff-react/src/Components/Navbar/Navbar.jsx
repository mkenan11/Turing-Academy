import "./Navbar.css";

export function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="https://safaroff.com/img/logo.svg" alt="React Logo" />
      </div>
      <div className="right-side">
        <div className="links">
          <a href="#">Biz Kimik?</a>
          <a href="#">Layihələr</a>
          <a href="#">Bloq</a>
        </div>
        <p>AZ <img src="https://safaroff.com/img/lang-arrow.svg" alt="ox" /></p>
        <button>Layihəm var</button>
      </div>
    </nav>
  );
}
