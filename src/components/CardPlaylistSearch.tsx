import { Item } from "../interfaces/PlaylistSeartchInterface";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Link } from "react-router-dom";

interface Items {
  items: Item[];
}

function CardPlaylistSearch(data: Items) {
  return (
    <div className="flex flex-wrap gap-4">
      {data.items.map((item) => (
        <Link to={`/playlist/${item.id}`} key={item.id} className="flex flex-col bg-gral-card pt-5 pb-8 px-4 gap-4 rounded-md hover:bg-cardInter cursor-pointer">
          <div className="">
            {item.images.length > 0 ? (
              <img className="shadow-image w-40 h-40 rounded-md search-image" src={item.images[0].url} />
            ) : (
              <div className={" bg-cardInter rounded-md shadow-image w-40 h-40 flex justify-center items-center"}>
              <MusicNoteIcon sx={{ fontSize: '5rem' }} />
            </div>
            )}
            <div className="mr-5 relative button-play -top-10 shadow-xl rounded-full">
              <PlayCircleIcon
                sx={{
                  fontSize: 40,
                  color: "green",
                  transition: "ease",
                  transitionDuration: "0.7s",
                  transitionDelay: "0.5s",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" featured-text text-sm">{item.name}</p>
            <p className="featured-subtext text-xs opacity-60">{"De " + item.owner.display_name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardPlaylistSearch;
