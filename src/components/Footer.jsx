const Footer = () => {
  return (
    <footer className="page-footer pink lighten-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://andreygaponik.github.io/react-shop">Repo</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;