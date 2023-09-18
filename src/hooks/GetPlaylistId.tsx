import { GetPlaylist } from "../services/PLaylistInfo";


export function GetPlaylistId(event:React.MouseEvent) { 
    const clickElement = event.currentTarget
    const idElement = clickElement.id  

    GetPlaylist(idElement)
}