import { BIBLIO_TEXT, HEADER_FORM, PLAYLIST_NAME, PLAYLIST_DESCRIPTION } from "../constants/TextConstants.ts";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import AddIcon from "@mui/icons-material/Add"; 

import { useState} from "react"; 
import axios from 'axios'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';



function BiblioNav() {
  const [OfModal, setOfModal] = useState("hidden"); 
  const [formData , setFormData] = useState({
    name: "",
    description: "", 
    public : true
  }); 

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target; 

    setFormData({
      ...formData,
      [name]: value
    });
  };


 

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault(); 

    const token = localStorage.getItem('token'); 
    const userId = localStorage.getItem('user_id')

    try {
      const response = await axios.post(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json'
        }, 
        formData,
      } ) 
      console.log(response)
    } catch (error) {
      console.log(error)
    }

  } 

  console.log(formData.name)


  const modalOf = () => {
    setOfModal("hidden");
  };

  const ModalOn = () => {
    setOfModal("");
  }; 
 


  return (
    <div>
      <div className="flex justify-between p-3">
        <div className="text-white flex gap-3 opacity-70 hover:opacity-100 cursor-pointer font-semibold">
          <QueueMusicIcon />
          <p className="text-base">{BIBLIO_TEXT}</p>
        </div>
        <button onClick={ModalOn}>
          <AddIcon className="text-white cursor-pointer opacity-70 hover:opacity-100 rounded-xl hover:bg-black transition-all" />
        </button>
      </div>
      
      <div className={OfModal}>
        <div className="fixed top-[0] left-[0] w-[100%] h-[100%] bg-bg-spoty bg-center blur-md z-10"></div>
        <form
          className="flex flex-col  gap-10 p-10 text-white top-[30%] left-[40%] bg-gral-card rounded-md z-10 fixed w-[400px] h-[500px]"
          action="" onSubmit={handleSubmit} 
        > 
        <h2 className="text-2xl text-center">{HEADER_FORM}<LibraryMusicIcon style={{fontSize:30}}/></h2>

          <div className="flex flex-col gap-1">
            <span>{PLAYLIST_NAME}</span>
            <input
              className="rounded-sm outline-none text-gray-500 pl-1"
              type="text"
              name="name"
              onChange={handleInputChange}
              value={formData.name}
            />
          </div>

          <div className="flex flex-col gap-1">
            <span>{PLAYLIST_DESCRIPTION}</span>
            <input
              className="rounded-sm outline-none text-gray-500 pl-1"
              type="text" 
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <input
            className="bg-cardInter text-white rounded-sm font-bold p-[10px] cursor-pointer"
            type="submit"
            onClick={modalOf}
            value={"Enviar"}
          />
        </form>
      </div>
    </div>
  );
}

export default BiblioNav;
