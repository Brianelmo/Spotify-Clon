import { useEffect, useState } from "react";
import axios from "axios";
import { DataUser } from "../interfaces/UserDataInterface";

function UserInfoservice() {
  const [userId, setUserId] = useState(""); 
  const [userName, SetUserName] = useState(""); 
  const [userPhoto, setUserPhoto] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userInfo = async () => {
      try {
        const response = await axios.get<DataUser>(
          "https://api.spotify.com/v1/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserId(response.data.id);
        SetUserName(response.data.display_name) 
        setUserPhoto(response.data.images[0].url)
      } catch (error) {
        console.log(error);
      }
    };

    userInfo();
  }, []);

  localStorage.setItem("user_id", userId);
  localStorage.setItem("user_name" , userName) 
  localStorage.setItem("user_photo" , userPhoto) 

  return(
    <div>
      <img className="rounded-full w-[40px] border-black border-[4px] mr-5" src={userPhoto} alt="" />
    </div>
  )
}

export default UserInfoservice;
