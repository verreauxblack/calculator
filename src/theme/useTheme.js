import { setToLS, getFromLS } from "../utils/storage";

export const useTheme = () => {
    const themes = getFromLS('all-themes');

    // store the selected theme in localstorage
    const setMode = mode => {
        if(mode==='0')
            setToLS('theme', themes.data.theme1);
        if(mode==='1')
            setToLS('theme', themes.data.theme2);
        if(mode==='2')
            setToLS('theme', themes.data.theme3);
    };
    return { setMode }
}
