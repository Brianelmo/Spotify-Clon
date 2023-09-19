import { Welcome } from "../interfaces/PlayListInfoInterface";
import {
  TITLE_SONGS,
  ALBMUM_LIST,
  FECHA_SONGS,
} from "../constants/TextConstants";
import { useState, useEffect, useRef } from "react";

interface dataList {
  data: Welcome | undefined;
}

const SongList = ({ data }: dataList) => {
  const [urlSong, setUrlSong] = useState("");
  const [reproduciendo, setReproduciendo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const changeSong = () => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (urlSong) {
      setReproduciendo(true);
    } else {
      setReproduciendo(false);
    }
  }, [urlSong]);

  const getUrlSong = (event: React.MouseEvent) => {
    const id = event.currentTarget.id;
    setUrlSong(id);
    changeSong();
  };

  console.log(urlSong);

  return (
    <div className="p-5 flex flex-col justify-center">
      <div className="flex pr-2 pl-2 justify-between text-white text-sm opacity-60 border-b pb-3 border-b-gray-600">
        <div className="">
          <p>{TITLE_SONGS}</p>
        </div>
        <div>
          <p className="ml-52 album-title">{ALBMUM_LIST}</p>
        </div>
        <div>
          <p className="date-title">{FECHA_SONGS}</p>
        </div>
      </div>
      <div className="mt-4 text-white flex flex-col gap-2">
        {data?.tracks.items.map((item) => (
          <div
            id={item.track.preview_url}
            onClick={getUrlSong}
            className="flex gap-4 justify-between pt-2 pb-2 pl-4  hover:bg-[#fcf9f913] rounded-md items-center"
            key={item.track.id}
          >
            <div className="flex gap-4 cursor-pointer">
              <img
                className="w-[45px]"
                src={item.track.album.images[0].url}
                alt=""
              />
              <div className="flex flex-col  w-[250px] overflow-hidden whitespace-nowrap overflow-ellipsis">
                <p className="">{item.track.name}</p>
                <div className="flex">
                  {item.track.artists.map((item) => (
                    <a href={item.uri} className="text-sm opacity-60">{item.name}</a>
                  ))}
                </div>
              </div>
            </div>
            <p className="opacity-60 ml-20 text-sm cursor-pointer w-[200px] overflow-hidden whitespace-nowrap overflow-ellipsis album-name">
              {item.track.album.name}
            </p>
            <p className="opacity-60 mr-4 time-song">
              {Math.round(item.track.duration_ms / (1000 * 60)) + ":00"}
            </p>
          </div>
        ))}
        {reproduciendo ? (
            <video
              className="fixed top-[2rem] right-[7.5rem] w-[350px] opacity-60 pt-[20px]w-[350px] rounded-3xl border-none outline-none h-[50px] audio"
              ref={videoRef}
              controls
              autoPlay 
            >
              <source src={urlSong} type="audio/mpeg" />
              <source src={urlSong} type="audio/ogg" />
            </video> 
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SongList;
