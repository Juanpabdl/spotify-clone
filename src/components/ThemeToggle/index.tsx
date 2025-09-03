import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if(storedTheme === 'dark'){
            document.documentElement.classList.add('dark')
            setIsDarkMode(true)
        }else{
            document.documentElement.classList.remove('dark')
            setIsDarkMode(false);
        }
    },[])

    const changeTheme = () => {
        if(!isDarkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
            setIsDarkMode(true);
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')
            setIsDarkMode(false);
        }    
    }

    return (
        <button className="cursor-pointer rounded-full" onClick={changeTheme}> 
            {
                isDarkMode ? 
                    <Moon className="h-5 w-5 text-foreground"/>
                :
                    <Sun className="h-5 w-5 text-foreground"/>
            } 
        </button>
    )
}
export default ThemeToggle;