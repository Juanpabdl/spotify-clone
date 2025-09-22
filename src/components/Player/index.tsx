import { 
    ListMusic, 
    Mic2, 
    Pause, Play, 
    PlaySquare, 
    Repeat, CircleOff, Shuffle, 
    Speaker, 
    StepBack, StepForward,
    TvMinimalPlay, 
    VolumeX, Volume, Volume1, Volume2, 
    ZoomIn} from "lucide-react";
import { usePlayer } from "../../utils/hooks/usePlayer";
//import './index.css'

const Player = () => {
    const {barRef, seekRef, currentTrack, time, isPlaying, play, pause, playPrevious, playNext, seekSong, volume, setVolume, isLooping, toggleLoop} = usePlayer();

    const formatTime = (time: number) => time <= 9 ? '0'+ time : time;
    
    const renderVolumeIcon = () => {
        let volumeElement = null;

        switch (true){
            case volume === 0: 
                volumeElement = <VolumeX className="w-4"/>;
                break;
            case volume <= 0.33:
                volumeElement = <Volume className="w-4"/>;
                break;
            case volume <= 0.66:
                volumeElement = <Volume1 className="w-4"/>;
                break;
            default:
                volumeElement = <Volume2 className="w-4"/>;
        }

        return volumeElement;
    }
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
                    <button className="group block-button">{/* Functionality pending */}
                        <Shuffle className="w-5"/>
                    </button>
                    <button onClick={playPrevious} className="group play-button">
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
                    <button onClick={playNext} className="group play-button">
                        <StepForward className="w-5 group-active:stroke-background"/>
                    </button>
                    <button onClick={toggleLoop} className="group play-button">
                        {isLooping ? (
                            <CircleOff className="w-5 group-active:stroke-background"/>
                        ):(
                            <Repeat className="w-5 group-active:stroke-background"/>
                        )}
                        
                    </button>
                </div>
                <div className="flex items-center gap-5">
                    <p>{formatTime(time.currentTime.minute)}:{formatTime(time.currentTime.second)}</p>
                    <div ref={seekRef} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursos-pointer">
                        <hr ref={barRef} className="h-1 border-border w-full bg-primary rounded-full"/>
                    </div>
                    <p>{formatTime(time.totalTime.minute)}:{formatTime(time.totalTime.second)}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <PlaySquare className="w-4"/>
                <Mic2 className="w-4"/>
                <ListMusic className="w-4"/>
                <Speaker className="w-4"/>
                {renderVolumeIcon()}
                <input className="w-20 h-1 rounded bg-white"
                type="range" 
                min={0} 
                max={1}
                step={.01}
                value={volume}
                onChange={(e)=>setVolume(e.target.valueAsNumber)}/>
                <TvMinimalPlay className="w-4"/>
                <ZoomIn className="w-4"/>
            </div>
        </div>
    )
}

export default Player;