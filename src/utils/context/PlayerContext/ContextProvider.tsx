import React, { useRef, useState } from "react";
import { PlayerContext, type PlayerContextType, type SongType } from ".";
import { songData } from "../../data/musicData";

interface PlayerProviderProps{
    children: React.ReactNode
}

const PlayerContextProvider:React.FC<PlayerProviderProps> = ({children}) => {
    const audioRef = useRef<HTMLAudioElement|null>(null);
    const barRef = useRef<HTMLHRElement|null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(50);
    const [currentTrack, setCurrentTrack] = useState<SongType>(songData[0])
    const [time, setTime] = useState({
        currentTime:{
            second: 0,
            minute: 0
        }, totalTime:{
            second: 0,
            minute: 0
        }
    })

    const play = () => {
        audioRef.current?.play()
        console.log('Now playing song')
        setIsPlaying(true)
    }

    const pause = () => {
        audioRef.current?.pause()
        console.log('Paused song')
        setIsPlaying(false)
    }

    const contextValue:PlayerContextType = {
        audioRef,
        barRef,
        isPlaying, setIsPlaying,
        volume, setVolume,
        currentTrack, setCurrentTrack,
        time, setTime,
        play,
        pause,
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;