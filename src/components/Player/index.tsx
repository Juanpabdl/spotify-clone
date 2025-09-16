import { 
    ListMusic, 
    Mic2, 
    Pause, Play, 
    PlaySquare, 
    Repeat, Shuffle, 
    Speaker, 
    StepBack, StepForward,
    TvMinimalPlay, 
    Volume2, 
    ZoomIn } from "lucide-react";
import { usePlayer } from "../../utils/hooks/usePlayer";
//import './index.css'

const Player = () => {
    const {barRef, currentTrack, time, isPlaying, play, pause} = usePlayer();

    return(
        <div className="h-[10%] w-full px-4 bg-background flex justify-between items-center text-foreground">
            <div className="hidden lg:flex items-center gap-4">
                <img className="w-12" src={currentTrack.img} alt="song_image"/>
                <div>
                    <p className="font-semibold">{currentTrack.name}</p>
                    <p>{currentTrack.desc.slice(0,12)}</p>
                </div>  
            </div>
            <div className="flex flex-col items-center gap-0.5 m-auto">
                <div className="flex gap-3">
                    <button className="group play-button">
                        <Shuffle className="w-5 group-active:stroke-background"/>
                    </button>
                    <button className="group play-button">
                        <StepBack className="w-5 group-active:stroke-background"/>
                    </button>
                    {isPlaying ? (
                        <button onClick={pause} className="group play-button">
                            <Pause className="w-5 group-active:stroke-background"/>
                        </button>
                    ):(
                        <button onClick={play} className="group play-button">
                            <Play className="w-5 group-active:stroke-background"/>
                        </button>
                    )}
                    <button className="group play-button">
                        <StepForward className="w-5 group-active:stroke-background"/>
                    </button>
                    <button className="group play-button">
                        <Repeat className="w-5 group-active:stroke-background"/>
                    </button>
                </div>
                <div className="flex items-center gap-5">
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursos-pointer">
                        <hr ref={barRef} className="h-1 border-border w-full bg-primary rounded-full"/>
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <PlaySquare className="w-4"/>
                <Mic2 className="w-4"/>
                <ListMusic className="w-4"/>
                <Speaker className="w-4"/>
                <Volume2 className="w-4"/>
                <div className="w-20 bg-foreground h-1 rounded">

                </div>
                <TvMinimalPlay className="w-4"/>
                <ZoomIn className="w-4"/>
            </div>
        </div>
    )
}

export default Player;