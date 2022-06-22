const Header = () => {
  return (
    <nav className="pink lighten-3">
      <div className="container">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">React Shop</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/andreygaponik/react-movies-v1" target="_blank">Repo</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;