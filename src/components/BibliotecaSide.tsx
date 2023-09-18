import BiblioNav from "./BiblioNav.tsx";
import PlayListCard from "./CardCurrentPlaylist.tsx";
import { useDataContext } from "../services/PlayList.service.tsx";
import UserInfoservice from "../services/UserInfo.service.tsx";


function BibliotecaSide() {
  const { playlist } = useDataContext();
  UserInfoservice();

  return (
    //Seccion de navegacion de las listas
    <div className="biblio-side ml-2 p-2 bg-card-bg w-[22vw] rounded-lg mt-2 h-80vh overflow-auto">
      <BiblioNav />
      <div>
        <PlayListCard playlist={playlist} />
      </div>
    </div>
  );
}

export default BibliotecaSide;
