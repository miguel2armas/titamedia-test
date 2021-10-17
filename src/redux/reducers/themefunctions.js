import {setDarkTheme, setLightTheme} from "../actions/themeActions";

export const setThemePage = (dispatch)=>{
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (localStorage.getItem("theme") === null) {
        if(userPrefersDark){
            localStorage.setItem("theme", "dark");
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", 'dark');
            dispatch(setDarkTheme())
        }else{
            localStorage.setItem("theme", "light");
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", 'light');
            dispatch(setLightTheme())
        }
    }else{
        if(localStorage.getItem("theme") === "dark"){
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", 'dark');
            dispatch(setDarkTheme())
        }else{
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", 'light');
            dispatch(setLightTheme())
        }
    }
}