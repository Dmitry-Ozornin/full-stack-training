function CurrentTime() {
   const time = Time();
    return ( 
        <div>
            <h2> Текущее время: {time}</h2>
        </div>

     );
}

export default CurrentTime;

function Time() {
    const time = new Date();
    const options ={
        hour: "numeric",
        minute: "numeric"
    }
    return (time.toLocaleTimeString('ru',options))
    
}