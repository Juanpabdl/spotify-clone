import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { albumData, songData } from "../../utils/musicData";
import { AudioWaveform, Clock } from "lucide-react";

type AlbumParams = {
    id?: string
}

const Album = () => {
    const {id} = useParams<AlbumParams>();

    if (id === undefined){
        return (<div>Album not found. Try again later.</div>)
    }

    const index = parseInt(id,10);
    const album = albumData[index];

    return(
        <>
            <Navbar/>
            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end">
                <img className='w-[250px] min-w-[150px] rounded' src={album.img}/>
                <div className="flex flex-col gap-4">
                    <h1>Playlist</h1>
                    <h2 className="text-4xl font-bold mb-4 md:text-6xl">{album.name}</h2>
                    <h3>{album.desc}</h3>
                    <p className="mt-1 flex flex-col md:flex-row gap-2">
                        <AudioWaveform className="inline-block w-5"/>
                        <b>Spotify</b>
                         * 32,429,718 likes
                         * <b>50 songs</b>
                        About 2h 30min
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-foreground/70">
                <p className="mr-4">#<b>Title</b></p>
                <p>Album</p>
                <p className="hidden sm:block">Date Added:</p>
                <Clock className="m-auto w-4"/>
            </div>
            <hr/>
            {songData.map((item,index) => (
                <div key={`song-item-${index}`} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center bg-background text-foreground/70 text-sm cursor-pointer hover:bg-background/60">
                    <p>
                        <b className="mr-4">{item.id+1}</b>
                        <img className="inline-block w-10 mr-5" src={item.img} alt={`img_${item.id+1}`}/>
                        {item.name}
                    </p>
                    <p>{album.name}</p>
                    <p className="hidden sm:block">5 days ago</p>
                    <p className="text-center">{item.duration}</p>
                </div>
            ))}
        </>
    )
}

export default Album;