import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";
import {Board} from "./components/BoardTable/Board";
import {ValueTable} from "./components/ValueTable/ValueTable";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {changeLimitAC, incCounterValueAC, resetValueAC, setMaxValueAC, setStartValueAC} from "./bll/counter-reducer";


export type NotifyType = 'enter value and press "set"' | 'incorrect value' | ''

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const startValue = localStorage.getItem('startCount');
        const maxValue = localStorage.getItem('maxCount');
        if (startValue) {
            dispatch(resetValueAC(Number(startValue)));
            dispatch(setStartValueAC(Number(JSON.parse(startValue))));
        }
        if (maxValue) {
            dispatch(setMaxValueAC(Number(JSON.parse(maxValue))));
        }
    }, [])


    const count = useSelector<AppStateType, number>(state => state.counter.count); // логика увеличения счётчика
    const limit = useSelector<AppStateType, boolean>(state => state.counter.limit); // максимального значения, отключение кнопки INC
    const error = useSelector<AppStateType, boolean>(state => state.counter.error); // state ошибки <incorrect value>
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue); // Для импута START
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue); // Для импута MAX
    const notify = useSelector<AppStateType, NotifyType>(state => state.counter.notify); // инфо панель "NotifyType"


    const clickHandlerUp = () => {
        dispatch(incCounterValueAC()); // инкремент счётчика
        if (count >= maxValue - 1) {
            dispatch(changeLimitAC(true)); // отключение кнопки inc
        }
    }
    const clickHandlerReset = () => {
        dispatch(changeLimitAC(false)); // включение кнопки inc
        dispatch(resetValueAC(startValue)); // сброс на исходное значение
    }

    return (
        <div className='main'>
            <div className="valueTable">
                <ValueTable error={error}/>
            </div>

            <div className="boardCounter">
                <div className='counter'>
                    <Board error={error}
                           title={count}
                           notify={notify}
                           maxValue={maxValue}
                    />
                </div>
                <div className='item'>
                    <Button onClick={clickHandlerUp}
                            disabled={limit || notify !== ''}>
                        INC
                    </Button>

                    <Button onClick={clickHandlerReset} disabled={count <= startValue || error}>
                        RESET
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
