import { Welcome } from "../interfaces/PlayListInfoInterface"

interface ArtistName { 
    data: Welcome | undefined
}

const ArtistName = ({data}:ArtistName) => {
  return (
    <div className="flex flex-col">
      {data?.tracks.items.map((item) => (
        item.track.artists.map((item) => (
            <p>{item.name}</p>
        ))
      ))}
    </div>
  )
}

export default ArtistName
