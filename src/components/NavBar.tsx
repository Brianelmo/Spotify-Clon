import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { CONST_HOME, CONST_BUSCAR } from "../constants/TextConstants.ts";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  //Ubicacion de la pagina en donde esta el usuario
  const location = useLocation();

  return (
    <div className="text-white bg-card-bg w-420 p-5 rounded-lg mt-2 ml-2 navBar">
      <ul className="flex flex-col align-middle justify-center gap-4">
        <Link
          to={"/home"}
          className={`nav-button ${
            location.pathname === "/home" ? "active" : ""
          }`}
        >
          <HomeRoundedIcon />
          {CONST_HOME}
        </Link>
        <Link
          to={"/search"}
          className={`nav-button ${
            location.pathname === "/search" ? "active" : ""
          }`}
        >
          <SearchRoundedIcon />
          {CONST_BUSCAR}
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
