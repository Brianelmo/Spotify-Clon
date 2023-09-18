import { Welcome } from "../interfaces/PlayListInfoInterface";

interface HeaderPlaylist {
  data: Welcome | undefined;
}

const HeaderPlaylist = ({ data }: HeaderPlaylist) => {
  return (
    <div>
      <header className="flex p-5 mt-6 text-white gap-6 items-center">
        {data?.images.length  ? (
          <img className="bg-playlistInfo w-[240px] h-[240px] rounded-sm" src={data?.images[0].url} />
        ) : (
          <div>

          </div>
        )}
        <div className="flex flex-col gap-7 info-section">
          <div className="flex flex-col gap-2">
            <p className="capitalize text-sm">{data?.type}</p>
            <h2 className="text-7xl font-bold">{data?.name}</h2>
          </div>
          <div className="flex flex-col gap-3">
            {data?.description ?  (
              <p className="text-sm opacity-70">{data?.description}</p>
            ) : (
              <div className="hidden"></div>
            )}
            <div className="flex items-center gap-1 text-sm opacity-70">
              <p>{data?.owner.display_name}</p>
              <p className="text-2xl">·</p>
              <p>{data?.tracks.total + " canciones"}</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderPlaylist;
