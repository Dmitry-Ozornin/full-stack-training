import { useContext } from "react";
import {ThemeContext} from "../App"
import classes from "./Profile.module.css"


function Profile() {
    const theme = useContext(ThemeContext);
    return ( 
        <>
        <div className = {theme === "light" ? `${classes.light}` : `${classes.dark}`}>
            <h2> Profile</h2>
            <p>какой-то текст </p>
        </div>
        </>
     );
}

export default Profile;