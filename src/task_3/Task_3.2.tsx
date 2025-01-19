import React, {ChangeEvent, useCallback, useState} from 'react';
import {SlowComponentMemo} from "./slowComponent/SlowComponentMemo";


//find the problem and fix it as part of composition optimization, memo, children


//Second method (memo)
export const Task_3_2 = () => {
    const [value, setValue] = useState('');

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value), []);

    return (
        <div>
            <h3>Task 3.2 Memo optimization</h3>
            <div>Lags when change value</div>
            <input type="text" value={value} onChange={onChange} />
            <SlowComponentMemo />
        </div>
    );
};



