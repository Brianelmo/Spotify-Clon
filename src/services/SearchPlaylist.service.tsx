import axios from 'axios'
import { useState } from 'react';  
import { Item } from '../interfaces/PlaylistSeartchInterface';



const [artist, setArtist] = useState<Item[]>([]);

    const artistFetch = async (KeySearch:string) => {

        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(
            "https://api.spotify.com/v1/search",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                q: KeySearch,
                type: "playlist",
                limit: 14,
              },
            }
          );

          setArtist(response.data.playlists.items);
        } catch (error) {
          console.log(error);
        } 


        return {
            artist
        }
      };


export default artistFetch
