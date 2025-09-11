import Navbar from "../../components/Navbar";
import AlbumItem from "../../components/AlbumItem";
import { albumData, songData } from "../../utils/data/musicData";
import SongItem from "../../components/SongItem";
const Home = () => {
    return(
        <div>
            <Navbar/>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex overflow-auto no-scrollbar">
                    {albumData.map((item,index) => (
                        <AlbumItem key={`album-item-${index}`} 
                        id={item.id}
                        name={item.name}
                        image={item.img}
                        desc={item.desc}/>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Today´s Biggest Hits</h1>
                <div className="flex overflow-auto no-scrollbar">
                    {songData.map((item,index) => (
                        <SongItem key={`album-item-${index}`} 
                        id={item.id}
                        name={item.name}
                        image={item.img}
                        desc={item.desc}/>
                    ))}
                </div>
            </div> 
        </div>
    )
}
export default Home;