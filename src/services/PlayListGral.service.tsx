import axios from "axios";
import { useState, useEffect } from "react";
import { PlaylistData } from "../interfaces/PlayListFollowInterface";
import CardFeaturedPlaylist from "../components/CardFeaturedPlaylist";

function PlayListGralservice() {

  const [gralData, setGralData] = useState<PlaylistData | null>(null); 

    const actualDate = new Date() 

    const dia = actualDate.toISOString().split('T')[0];  

    const hora = actualDate.getHours();

    let fechaHora = dia + ' ' + hora; 



  useEffect(() => {
    console.log(fechaHora)
    const fetchGralData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get<PlaylistData>(
          `https://api.spotify.com/v1/browse/featured-playlists?timestamp=${dia}T${hora}%3A00%3A00&limit=7`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setGralData(response.data);
       
      } catch (error) {
        console.log(error);
      }
    };

    fetchGralData();
  }, []);

  return (
   <CardFeaturedPlaylist dataPlaylist={gralData}/>
  );
}

export default PlayListGralservice;
