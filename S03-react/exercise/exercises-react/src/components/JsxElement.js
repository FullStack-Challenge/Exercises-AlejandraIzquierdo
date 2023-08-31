import { useState, useEffect } from "react";

/*function ExposeCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
    
}

export default ExposeCounter;*/


function ExposeTime() {
    const [time, setTime] = useState(Date().toString());

    useEffect(() => {
        const timeOutId = setInterval(() => {
            setTime(Date().toString());
        }, 1000);

        return() => {
            clearInterval(timeOutId);
        }
    }, []);

    return (
        <div>{time}</div>
    )
}

export default ExposeTime;
