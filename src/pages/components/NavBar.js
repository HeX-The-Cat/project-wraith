import { Link } from "react-router-dom";
import '../../index.css';

const NavBar = () => {
    return (
      <div className=" bg-yellow-400 p-3">
        <nav>
            <ul className=" flex justify-center">
                <li className=" navBarCss ">
                  <Link to="/">Pelin Esittely</Link>
                </li>
                <li className=" navBarCss ">
                  <Link to="FirmanEsittely">Firman Esittely</Link>
                </li>
                <li className=" navBarCss ">
                  <Link to="DevBlog">DevBlog</Link>
                </li>
                <li className=" navBarCss ">
                  <Link to="Resurssit">Resurssit</Link>
                </li>
                <li className=" navBarCss ">
                  <Link to="Trivia">Trivia</Link>
                </li>
            </ul>
        </nav>
      </div>
        
    )
}

export default NavBar