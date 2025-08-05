import { useState } from "react";

function Counter() {
    
    const [counter, setCounter] = useState(0);
    const countUp = () => {
        setCounter(counter + 1)
        
    }

    
    return ( 
        <>
        <p>{counter}</p>
        <button onClick={countUp}>увеличить на 1</button>
        </>
     );
}

export default Counter;