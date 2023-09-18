import NavBar from "../components/NavBar";
import BibliotecaSide from "../components/BibliotecaSide";
import PlayListZone from "../components/PlayListZone.tsx";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [token, setToken] = useState("");


  useEffect(() => {
    const hash = window.location.hash;

    let tokens = window.localStorage.getItem("token");

    if (!tokens && hash) {
      // @ts-ignore
      tokens = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", tokens);
    }
    // @ts-ignore
    setToken(tokens);
    console.log(token);
  }, []);

  return (
    <div className="">
      <div className="flex flex-row-reverse justify-between">
        <div
          className={`w-80vw mt-2 bg-playlistzone rounded-lg mr-2 `}
        >
          <PlayListZone />
        </div>

        <div className="flex flex-col mr-2">
          <NavBar />
          <BibliotecaSide />
        </div>
      </div>
    </div>
  );
};

export default Home;
