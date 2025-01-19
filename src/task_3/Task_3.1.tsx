import React, {ChangeEvent, useState} from 'react';

//First method (composition optimization)
export const Task_3_1 = () => {
  return (
    <div>
        <h3>Task 3.1 Composition optimization</h3>
      <div>Lags when change value</div>
        <Input/>
      <SlowComponent />
    </div>
  );
};

const  Input = () => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
    return (
        <input type="text" value={value} onChange={onChange}/>
    )
}

export const SlowComponent = () => {
    console.log('SlowComponent re-render...');

    let now = performance.now();

    while (performance.now() - now < 1000) {
        // Artificial delay -- do nothing for 100ms
    }

    return <p>I am a very slow component tree.</p>;
};
