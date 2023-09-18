import NavBarPlayListZone from "./NavBarPlayListZone";
import CardPlayListZoneCard from "./CardPlayListZone.tsx";
import { useDataContext } from "../services/PlayList.service.tsx";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { TEXT_HOME, TEXT_SEARCH, PLACEHOLDER_SEARCH } from "../constants/TextConstants.ts";
import PlayListGralservice from "../services/PlayListGral.service.tsx"; 
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"; 
import axios from  'axios'
import { Item } from '../interfaces/PlaylistSeartchInterface'; 
import CardPlaylistSearch from "./CardPlaylistSearch.tsx";

function PlayListZone() {
  const { playlist } = useDataContext();
  const location = useLocation();

  const [artist, setArtist] = useState<Item[]>([]);
  const [searchKey, setSearchKey] = useState(""); 

  useEffect(() => {
    const artistFetch = async () => {

      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/search",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              q: searchKey,
              type: "playlist",
              limit: 15,
            },
          }
        );

        setArtist(response.data.playlists.items);
      } catch (error) {
        console.log(error);
      } 
     
    }; 

    artistFetch()
  }, [searchKey])

  const setLocation = () => {
    if (location.pathname === "/home") {
      return (
        <h2 className="text_home text-white text-2xl font-extrabold">{TEXT_HOME}</h2>
      );
    } else if (location.pathname === "/search") {
      return (
        <h2 className="text_search text-white text-2xl font-extrabold">{TEXT_SEARCH}</h2>
      );
    }
  }; //Funcion que decide que texto mostrar dependiendo de la pagina en las que estas

  return (
    <div className="rounded playlistzone">got
      <div className="mb-1 flex items-center">
        <NavBarPlayListZone />
        <div className="flex items-center gap-9 pr-4 tracking-widest">
        <div
          className={`search flex justify-center items-center bg-cardInter rounded-full target:border-white px-3 text-white opacity-70 mt-3 ${
            location.pathname === "/home" && "/playlist" ? "ocultar" : ""
          }`} //Oculta el elemento dependiendo de en que pagina estes
        >
          <SearchRoundedIcon />
          <input
            className={`input-search flex items-start py-3 px-1 w-80 bg-transparent border-none outline-none text-sm cursor-text`}
            type={"search"}
            placeholder={PLACEHOLDER_SEARCH}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div> 
      </div>
      </div>
      <section className="p-5 w-full flex flex-col">
        <div>{setLocation()}</div>
        <div
          className={` search ${
            location.pathname === "/search" ? "ocultar" : ""
          }`}
        >
          <CardPlayListZoneCard playlist={playlist} />
        </div>

      </section> 
      <section className="text-white text-2xl font-semibold p-5">
      {PlayListGralservice()} 
        <div className={ `CardPlaylistZone ${searchKey === '' ? "ocultar" : ""}`}>
        <CardPlaylistSearch items={artist}/>
        </div>
      </section>
    </div>
  );
}

export default PlayListZone;
