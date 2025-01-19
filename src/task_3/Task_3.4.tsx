import React, {useRef} from 'react';


//Fourth method (useRef)
export const Task_3_4 = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const clickHandle = () => {
        if (inputRef.current) {
            console.log(inputRef.current.value)
        }
    }

    return (
        <div>
            <h3>Task 3.4 useRef optimization</h3>
            <div>Lags when change value</div>
            <input type="text" ref={inputRef}/>
            <button onClick={clickHandle}>+</button>
            <SlowComponent/>
        </div>
    );
};

export const SlowComponent = () => {
    console.log('SlowComponent re-render...');

    let now = performance.now();

    while (performance.now() - now < 1000) {
        // Artificial delay -- do nothing for 100ms
    }

    return <p>I am a very slow component tree.</p>;
};

