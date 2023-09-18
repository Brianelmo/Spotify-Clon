import UserInfoservice from "../services/UserInfo.service";
import { useLocation, Link } from "react-router-dom";

function NavBarPlayListZone() {
  //Funcion volver hacia atras en la pagina
  const goBack = () => {
    history.back(); //Usa el historial para volver atras
  };

  //Funcion para volver hacia adelante en la pagina
  const goForward = () => {
    history.forward(); //Usa el historial para ir hacia adelante
  };

  const location = useLocation();

  return (
    <div
      className={`bg-transparent rounded-lg h-14 flex items-center pt-3 ${
        location.pathname === "/search" ? "" : "justify-between w-full"
      }`}
    >
      <div className="bg-transparent opacity-80 rounded-tr-lg rounded-tl-lg p-5 flex gap-3">
        <button
          onClick={goBack}
          className="text-white bg-black rounded-full py-1 px-3 text-2xl cursor-pointer"
        >
          {"<"}
        </button>
        <button
          onClick={goForward}
          className="text-white bg-black rounded-full py-1 px-3 text-2xl cursor-pointer"
        >
          {">"}
        </button>
      </div>
      <div
        className={`${
          location.pathname === "/search" ? "hidden" : ""
        } flex gap-3`}
      >
        <div className="nav-phone flex gap-2">
          <Link
            className="bg-black rounded-md text-white pt-2 px-5 flex text-center opacity-80"
            to={"/home"}
          >
            Home
          </Link>
          <Link
            to={"/search"}
            className="bg-black rounded-md text-white pt-2 px-5 flex text-center opacity-80"
          >
            Search
          </Link>
        </div>
        <UserInfoservice />
      </div>
    </div>
  );
}

export default NavBarPlayListZone;
