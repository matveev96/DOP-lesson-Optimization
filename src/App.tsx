import React, {Fragment} from 'react';
import {Task_3_3} from "./task_3/Task_3.3";
import {SlowComponent} from "./task_3/slowComponent/SlowComponent";
import {Task_3_2} from "./task_3/Task_3.2";
import {Task_3_1} from "./task_3/Task_3.1";
import {Task_3_4} from "./task_3/Task_3.4";

export type UserType = {
    [key: string]: { name: string, id: string }
};

const DATA_7: UserType[] = [
    {u1: {name: 'Gleb', id: '1'}},
    {u2: {name: 'Dima', id: '2'}},
    {u3: {name: 'Svetlana', id: '3'}},
    {u4: {name: 'Artur', id: '4'}},
    {u5: {name: 'Vera', id: '5'}},
    {u6: {name: 'Vlad', id: '6'}},
];

export const App = () => {
    return (
        <Fragment>
            <Task_3_1/>
            <hr/>
            <Task_3_2/>
            <hr/>
            <Task_3_3>
                <SlowComponent/>
            </Task_3_3>
            <hr/>
            <Task_3_4/>
            <hr/>
        </Fragment>
    );
};
