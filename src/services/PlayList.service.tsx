import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { PlayListInterface } from "../interfaces/PlayListInterface.ts";

//Definicion del tipo de dato para el context
interface DataContextType {
  playlist: PlayListInterface[];
}

//Definicion de las propiedades esperadas para el dataprovider
interface DataProviderProps {
  children: React.ReactNode; //Propiedad children para encapsular componentes hijos
}

//Creacion del context
const DataContext = createContext<DataContextType | undefined>(undefined);

//Componente DataProvider que provee del contexto a sus hijos
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  
  //Estado que almacena el array de playlist
  const [playlist, setPlaylist] = useState<PlayListInterface[]>([]);

  //UseEffect para obtener los elementos de la api
  useEffect(() => {
    //Funcion que llama a la api
    const RenderPlayList = async () => {
      //Obtener el token del localStorage
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/playlists",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          } 
        );
        setPlaylist(response.data.items);
        //asignar el valor de la respuesta a playlist 
      } catch (error) {
        console.log("Error al traer los datos", error);
      }
    };

    RenderPlayList();
  }, []);

  //Renderizar del context y componentes hijos
  return (
    <DataContext.Provider value={{ playlist }}>{children}</DataContext.Provider>
  );
};

//Hook para acceder al context

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
