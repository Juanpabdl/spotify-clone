import { createContext, type RefObject } from "react";

type Time = {
    currentTime: {
        second: number,
        minute: number,
    },
    totalTime: {
        second: number,
        minute: number
    }
}

export type SongType = {
    id: number,
    name: string,
    img: string,
    file: string|null,
    desc: string,
    duration: string
}

export type PlayerContextType = {
    isPlaying: boolean;
    volume: number;
    currentTrack: SongType;
    audioRef: RefObject<HTMLAudioElement|null>;
    barRef: RefObject<HTMLHRElement|null>,
    time: Time,
    play: () => void;
    pause: () => void;
    setIsPlaying: (playing: boolean) => void;
    setCurrentTrack: (src: SongType) => void;
    setVolume: (newVolume: number) => void;
    setTime: (newTime: Time) => void;
    playWithId: (id: number) => void;
    playPrevious: () => void;
    playNext: () => void;
}

export const PlayerContext = createContext<PlayerContextType|undefined>(undefined)

