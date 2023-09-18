import { PlayListInterface } from "../interfaces/PlayListInterface.ts";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Link , useParams} from "react-router-dom";

interface PlayListCard {
  playlist: PlayListInterface[];
} 

const PlayListCard: React.FC<PlayListCard> = ({ playlist }) => {

  const {id} = useParams();

  return (
    <div>
      {playlist.map((list) => (
        //Mapeo al array y renderizado de las playlist del usuario
        <Link
          to={`/playlist/${list.id}`}
          key={list.id}
          className={
            `${id === list.id ? 'bg-[#fcf9f913]' : ''} flex gap-5 text-white py-2 w-full rounded-md hover:bg-[#fcf9f913] cursor-pointer`
          } 
        >
          {list.images.length > 0 ? ( //Funcion que revisa si el array de imagenes viene vacio
            <div className={"ml-2"}>
              <img
                className={"w-14 h-14 rounded-md"}
                src={list.images[0].url}
                alt={""}
              />
            </div>
          ) : (
            //Si no encuentra una imagen en el array agrega un icono por defecto
            <div className={"ml-2 p-2 bg-cardInter rounded-md"}>
              <MusicNoteIcon sx={{ fontSize: 40 }} />
            </div>
          )}
          <div className={"flex flex-col gap-2"}>
            <h2 className={"font-bold"}>{list.name}</h2>
            <p className={"text-sm opacity-70 font-semibold"}>
              {"Playlist" + " · " + list.owner.display_name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PlayListCard;
