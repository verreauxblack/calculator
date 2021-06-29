/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { setToLS, getFromLS } from "../utils/storage";


export const useTheme = () => {
    const themes = getFromLS('all-themes');
    const [theme, setTheme] = useState(themes.data.theme1);
    const [themeLoaded, setThemeLoaded] = useState(false);
    // console.log(themes);
    const setMode = mode => {
        if(mode==='0')
            setToLS('theme', themes.data.theme1);
        if(mode==='1')
            setToLS('theme', themes.data.theme2);
        if(mode==='2')
            setToLS('theme', themes.data.theme3);
        // setTheme(mode);
    };

    useEffect(() => {
        const localTheme = getFromLS('theme');
        localTheme ? setTheme(localTheme) : setTheme(themes.data.theme1);
        setThemeLoaded(true);
    }, []);

    return { theme, themeLoaded, setMode }
}
