import React, {ChangeEvent, ReactNode, useState} from 'react';


//Third method (children)
type ChildrenType = {children: ReactNode}
export const Task_3_3 = ({children}: ChildrenType) => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return (
        <div>
            <h3>Task 3.3 Children optimization</h3>
            <div>Lags when change value</div>
            <input type="text" value={value} onChange={onChange}/>
            {children}
        </div>
    );
};
