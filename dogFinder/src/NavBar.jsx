import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div id="navDiv">
      <p>
        <NavLink to="/">Home</NavLink>
      </p>
      <p>
        <NavLink to="/dogs/whiskey">Whiskey</NavLink>
      </p>
      <p>
        <NavLink to="/dogs/perry">Perry</NavLink>
      </p>
      <p>
        <NavLink to="/dogs/tubby">Tubby</NavLink>
      </p>
      <p>
        <NavLink to="/dogs/duke">Duke</NavLink>
      </p>
    </div>
  );
}

export default NavBar;
