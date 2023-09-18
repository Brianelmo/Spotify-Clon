import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import PlayCircle from '@mui/icons-material/PlayCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';


const NavPlaylistInfo = () => {  


    const [clickLike , setClickLike ] =  useState(false)

    const LikeClick = () => {
        setClickLike(true)
    } 

    const DisLike = () => {
        setClickLike(false)
    }


  return (
    <div className=''> 
    <nav className='p-5 flex gap-5 items-center'>
    <PlayCircle style={{fontSize:60, color:"green", cursor:"pointer"}}/>
        {clickLike === false ? (
            <button onClick={LikeClick}><FavoriteBorderIcon style={{fontSize:35, color:"gray"}}/></button> 
        ): (
            <button onClick={DisLike}><FavoriteIcon style={{fontSize:35, color:"green"}}/></button>
        )}
        <MoreHorizIcon style={{color:"gray", fontSize:35, cursor:'pointer'}}/>
    </nav>
    </div>
  )
}

export default NavPlaylistInfo
