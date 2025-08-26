import { useContext, useState } from "react";
import {ThemeContext} from "../App"
import classes from "./Profile.module.css"

function Footer() {
    const theme = useContext(ThemeContext);
    const [now, setNow] = useState(new Date());

    setInterval(() => {
        setNow(new Date());
    }, 1000);
    
    return ( 
        <>
        <div className={theme === 'light' ? `${classes.light}` : `${classes.dark}`}>
            <h2>Footer</h2>
            <p>Time: {now.toLocaleTimeString()}</p>
        </div>
        </>
     );
}

export default Footer;
