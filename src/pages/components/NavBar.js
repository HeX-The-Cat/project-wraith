import { BrowserRouter, Route, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                  <Link to="/">Pelin Esittely</Link>
                </li>
                <li>
                  <Link to="FirmanEsittely">Firman Esittely</Link>
                </li>
                <li>
                  <Link to="DevBlog">DevBlog</Link>
                </li>
                <li>
                  <Link to="Resurssit">Resurssit</Link>
                </li>
                <li>
                  <Link to="Trivia">Trivia</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar