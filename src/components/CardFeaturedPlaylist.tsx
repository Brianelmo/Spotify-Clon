import { PlaylistData } from "../interfaces/PlayListFollowInterface";
import { Link, useLocation } from "react-router-dom";

interface data {
  dataPlaylist: PlaylistData | null;
}

function CardFeaturedPlaylist({ dataPlaylist }: data) {
  const location = useLocation();

  return (
    <div className={`${location.pathname === "/search" ? "gral-ocultar" : ""} `}>
      {dataPlaylist && (
        <div className="">
          <div>
            <p className="text-2xl mb-6 font-bold">{dataPlaylist.message}</p>
          </div>
          <div className="flex gap-6 featured-playlist">
            {dataPlaylist.playlists.items.map((items) => (
              <Link
                to={`/playlist/${items.id}`}
                key={items.id}
                className="flex flex-col gap-4 bg-gral-card pt-5 pb-8 px-4 rounded-md cursor-pointer hover:bg-cardInter"
              >
                <div>
                  <img
                    className="featured-image w-40 rounded-md shadow-image"
                    src={items.images[0].url}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-4 capitalize">
                  <p className="featured-text text-base font-bold overflow-hidden whitespace-nowrap overflow-ellipsis w-[150px]">{items.name}</p>
                  <div className="flex text-sm gap-2 opacity-70">
                    <p className="featured-subtext">{items.type + " · " + items.owner.display_name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CardFeaturedPlaylist;
