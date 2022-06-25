import { NavLink } from "react-router-dom";
import '../../index.css';

const NavBar = () => {
    return (
      <div className=" transparencyGray p-3">
        <nav>
            <ul className=" flex justify-center">
                <li className=" navBarCss ">
                  <NavLink to="/" className={({isActive}) => isActive ? 'navBarActive' : 'hvr-underline-from-center'}>
                    Pelin Esittely
                  </NavLink>
                </li>
                <li className=" navBarCss ">
                  <NavLink to="FirmanEsittely" className={({isActive}) => isActive ? 'navBarActive' : 'hvr-underline-from-center'}>
                    Firman Esittely
                  </NavLink>
                </li>
                <li className=" navBarCss ">
                  <NavLink to="DevBlog" className={({isActive}) => isActive ? 'navBarActive' : 'hvr-underline-from-center'}>
                    DevBlog
                  </NavLink>
                </li>
                <li className=" navBarCss ">
                  <NavLink to="Resurssit" className={({isActive}) => isActive ? 'navBarActive' : 'hvr-underline-from-center'}>
                    Resurssit
                  </NavLink>
                </li>
                <li className=" navBarCss ">
                  <NavLink to="Trivia" className={({isActive}) => isActive ? 'navBarActive' : 'hvr-underline-from-center'}>
                    Trivia
                  </NavLink>
                </li>
            </ul>
        </nav>
      </div>
    )
}

export default NavBar