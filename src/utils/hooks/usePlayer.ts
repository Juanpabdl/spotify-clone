import { useContext } from "react";
import { PlayerContext, type PlayerContextType } from '../context/PlayerContext'

export const usePlayer = (): PlayerContextType => {
    const context = useContext(PlayerContext)

    if (context === undefined) {
        throw new Error('useAudio must be used within an AudioProvider');
    }

    return context;
}
