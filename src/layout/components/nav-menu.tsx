import { NavLink } from "react-router";

function Menu({ text = '', path = "#" }) {
  return (
    <NavLink
      to={`/${path}`}
      className={({ isActive }) =>
        `font-medium rounded-lg transition duration-200 focus:outline-none cursor-pointer active:scale-95 
     hover:text-secondary-0 
     ${isActive ? "text-secondary-0" : "text-text-0"}`
      }
    >
      <span>{text}</span>
    </NavLink>
  );
}

export default Menu;
