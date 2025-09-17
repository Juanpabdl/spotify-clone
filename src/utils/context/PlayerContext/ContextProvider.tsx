import React, { useEffect, useRef, useState } from "react";
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
        setIsPlaying(true)
    }

    const pause = () => {
        audioRef.current?.pause()
        setIsPlaying(false)
    }

    const playWithId = async (id: number) => {
        await setCurrentTrack(songData[id]);
        await audioRef.current?.play();
        setIsPlaying(true);
    }

    const playPrevious = async () => {
        if(currentTrack.id > 0){
            await setCurrentTrack(songData[currentTrack.id-1])
            await audioRef.current?.play();
            setIsPlaying(true);
        }
    }

    const playNext = async () => {
        if(currentTrack.id < songData.length-1){
            await setCurrentTrack(songData[currentTrack.id+1])
            await audioRef.current?.play();
            setIsPlaying(true);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current!.ontimeupdate = () => {
                barRef.current!.style.width = (Math.floor(audioRef.current!.currentTime / audioRef.current!.duration * 100)) + '%';
                setTime({
                    currentTime:{
                        second: Math.floor(audioRef.current!.currentTime % 60),
                        minute: Math.floor(audioRef.current!.currentTime / 60)
                    }, totalTime:{
                        second: Math.floor(audioRef.current!.duration % 60),
                        minute: Math.floor(audioRef.current!.duration / 60)
                    }
                });
            }
        }, 1000);
    },[audioRef, barRef]);

    const contextValue:PlayerContextType = {
        audioRef,
        barRef,
        isPlaying, setIsPlaying,
        volume, setVolume,
        currentTrack, setCurrentTrack,
        time, setTime,
        play, pause,
        playWithId, playPrevious, playNext,
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;