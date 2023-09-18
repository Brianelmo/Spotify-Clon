import NavBar from "../components/NavBar"
import BibliotecaSide from "../components/BibliotecaSide"
import NavBarPlayListZone from "../components/NavBarPlayListZone"
import infoPlaylist from "../services/PLaylistInfo"




function Playlist() {


  return (
    <div className="">
       <div className="flex flex-row-reverse justify-between">
        <div className="bg-playlistzoneInfo w-80vw h-[96vh] mt-2 bg-card-bg rounded-lg mr-2 overflow-auto">
          <NavBarPlayListZone/>
          <div>
           {infoPlaylist()}
          </div> 
        </div>

        <div className="flex flex-col mr-2">
          <NavBar />
          <BibliotecaSide />
        </div>
      </div>
    </div>
  )
}

export default Playlist
