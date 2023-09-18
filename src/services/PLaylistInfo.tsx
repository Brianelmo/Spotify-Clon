import axios from "axios";
import { useState, useEffect } from "react";
import { Welcome } from "../interfaces/PlayListInfoInterface";
import HeaderPlaylist from "../components/HeaderPlaylist";
import { useParams } from "react-router-dom";
import NavPlaylistInfo from "../components/NavPlaylistInfo";
import SongList from "../components/PlayListSongList";

function infoPlaylist() {
  const [infoPlaylist, setInfoPlaylist] = useState<Welcome>(); 

  //Obtener id de la url actual
  const {id} = useParams()

  useEffect(() => { 

    async function GetPlaylist() {  
      const token = localStorage.getItem("token");
      try {
        const {data} = await axios.get(
          `https://api.spotify.com/v1/playlists/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }, 

          }
        );
        setInfoPlaylist(data);
      } catch (error) {
        console.log(error);
      }
    }
    GetPlaylist();
  }, [id]);
  
    console.log(infoPlaylist)
  return (
    <div>
      <header>
      <HeaderPlaylist data={infoPlaylist}/> 
      </header>
        <nav className="">
          <NavPlaylistInfo/>
        </nav> 
        <div>
          <SongList data={infoPlaylist}/>
        </div> 
        
    </div>
  );
}

export default infoPlaylist;
