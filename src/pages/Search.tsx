import PlayListZone from "../components/PlayListZone";
import NavBar from "../components/NavBar";
import BibliotecaSide from "../components/BibliotecaSide" ;

const Search: React.FC = () => {


  return (
    <div>
      <div className="flex flex-row-reverse justify-between">
        <div className="search-zone w-80vw mt-2 bg-card-bg rounded-lg mr-2">
          <PlayListZone />
        </div>

        <div className="flex flex-col mr-2">
          <NavBar />
          <BibliotecaSide />
        </div>
      </div>
    </div>
  );
}

export default Search;
