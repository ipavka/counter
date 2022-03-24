import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";
import {Board} from "./components/BoardTable/Board";
import {ValueTable} from "./components/ValueTable/ValueTable";

const START_VALUE = 0
const MAX_VALUE = 5

const App = () => {

    const [count, setCount] = useState<number>(START_VALUE); // state счётчика
    const [limit, setLimit] = useState<boolean>(false); // state максимального значения
    const [error, setError] = useState<boolean>(false); // state ошибки

    const [startValue, setStartValue] = useState<number>(START_VALUE); // state ошибки
    const [maxValue, setMaxValue] = useState<number>(MAX_VALUE); // state ошибки

    const clickHandlerUp = () => { // инкремент счётчика
        setCount(count + 1)
        if (count >= MAX_VALUE - 1) {
            setLimit(true) // отключение кнопки inc
            setError(true) // красный цвет ошибки
        }
    }
    const clickHandlerReset = () => { // сброс счётчика
        setCount(START_VALUE) // сброс на исходное значение
        setLimit(false) // включение кнопки inc
        setError(false) // отключение красного цвета ошибки
    }

    return (
        <div className={'main'}>
            <div className="valueTable">
                <ValueTable
                    startValue={startValue}
                    maxValue={maxValue}
                    setStartValue={setStartValue}
                    setMaxValue={setMaxValue}
                />
            </div>

            <div className="boardCounter">
                <div className='counter'>
                    <Board error={error}
                           title={count}/>
                </div>
                <div className='item'>
                    <Button onClick={clickHandlerUp}
                            disabled={limit}>
                        inc
                    </Button>

                    <Button onClick={clickHandlerReset} disabled={count <= START_VALUE}>
                        reset
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
