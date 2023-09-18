import { PlayListInterface } from "../interfaces/PlayListInterface";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Link } from "react-router-dom";

interface PlayListCard {
  playlist: PlayListInterface[];
}  


const PlayListZoneCard: React.FC<PlayListCard> = ({ playlist }) => {

  const limitedPlaylist = playlist.slice(0, 6);

  return (
    <div className="flex flex-wrap gap-4">
      {limitedPlaylist.map((list) => (
        <Link
          to={`/playlist/${list.id}`}
          key={list.id}
          id={list.id}
          className="card-home flex gap-4 items-center w-[28rem] h-20 rounded-md mt-5 cursor-pointer"
        >
          {list.images.length > 0 ? ( //Funcion que revisa si el array de imagenes viene vacio
            <div className={""}>
              <img
                className={"h-20 w-24 rounded-l-md shadow-card"}
                src={list.images[0].url}
                alt={""}
              />
            </div>
          ) : (
            //Si no encuentra una imagen en el array agrega un icono por defecto
            <div className={"h-20 w-24 bg-cardInter rounded-l-md flex items-center justify-center shadow-card"}>
              <MusicNoteIcon sx={{ fontSize: 40, color:"white"}} />
            </div>
          )}
          <div className="title-card w-full flex items-center justify-between">
            <h2 className="text-white font-semibold text-lg">{list.name}</h2>
            <div className="mr-5 button-play shadow-xl rounded-full">
            <PlayCircleIcon sx={{fontSize: 40, color:"green", transition:"ease", transitionDuration:"0.7s", transitionDelay:"0.5s"}}/>
          </div>
          
          </div> 
        </Link>
      ))}
    </div>
  );
};

export default PlayListZoneCard;
