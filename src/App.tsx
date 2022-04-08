import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";
import {Board} from "./components/BoardTable/Board";
import {ValueTable} from "./components/ValueTable/ValueTable";

const MAX_VALUE = 5
const START_VALUE = 0
export type NotifyType = 'enter value and press "set"' | 'incorrect value' | ''

const App = () => {

    useEffect(() => {
        const startValue = localStorage.getItem('startCount');
        const maxValue = localStorage.getItem('maxCount');
        if (startValue) {
            setCount(JSON.parse(startValue))
            setStartValue(+JSON.parse(startValue))
        }
        if (maxValue) {
            setMaxValue(+JSON.parse(maxValue))
        }
    }, [])


    const [count, setCount] = useState<number>(START_VALUE); // state увеличения счётчика
    const [limit, setLimit] = useState<boolean>(false); // максимального значения, отключение кнопки INC
    const [error, setError] = useState<boolean>(false); // state ошибки <incorrect value>

    const [startValue, setStartValue] = useState<number>(START_VALUE); // state Для импута START
    const [maxValue, setMaxValue] = useState<number>(MAX_VALUE); // state Для импута MAX

    const [notify, setNotify] = useState<NotifyType>(''); // инфо панель "NotifyType"

    const clickHandlerUp = () => { // инкремент счётчика
        setCount(count + 1)
        if (count >= maxValue - 1) {
            setLimit(true) // отключение кнопки inc
        }
    }
    const clickHandlerReset = () => { // сброс счётчика
        setCount(startValue) // сброс на исходное значение
        setLimit(false) // включение кнопки inc
    }

    return (
        <div className='main'>
            <div className="valueTable">
                <ValueTable
                    startValue={startValue}
                    maxValue={maxValue}
                    setStartValue={setStartValue}
                    setMaxValue={setMaxValue}
                    error={error}
                    setError={setError}
                    setNotify={setNotify}
                    notify={notify}
                    setCount={setCount}
                />
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

                    <Button onClick={clickHandlerReset} disabled={count <= startValue}>
                        RESET
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
