import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Board} from "./components/Board";
import {ValueTable} from "./components/ValueTable/ValueTable";

const App = () => {

    function StartCount() {
        const value = localStorage.getItem('startCount');
        if (value) {
            return JSON.parse(value);
        } else return 0
    }

    function valueMax() {
        const value = localStorage.getItem('maxCount');
        if (value) {
            return JSON.parse(value);
        } else return 5
    }

    const [startCount, setStartCount] = useState<number>(StartCount());
    const [maxCount, setMaxCount] = useState<number>(valueMax());
    const [count, setCount] = useState<number>(startCount);
    const [limit, setLimit] = useState<boolean>(true);
    const [countInfo, setCountInfo] = useState<boolean>(true);
    const [errorInfo, setErrorInfo] = useState<boolean>(false);

    const clickHandlerUp = () => {
        setCount(count + 1)
        if (count >= maxCount - 1) {
            setLimit(false)
        }
    }
    const clickHandlerReset = () => {
        setCount(startCount)
        setLimit(true)
    }
    const setStartHandler = (value: number) => {
        setCount(value)
    }
    const setMaxHandler = (value: number) => {
        setMaxCount(value)
    }

    return (
        <div className={'main'}>
            <div className="valueTable">
                <ValueTable inputValueMax={maxCount}
                            inputValueStart={startCount}
                            setStart={setStartCount}
                            setMax={setMaxCount}
                            setStartHandler={setStartHandler}
                            setMaxHandler={setMaxHandler}
                            bordChangeState={setCountInfo}
                            errorInfoHandler={setErrorInfo}
                />
            </div>

            <div className="boardCounter">
                <div className='counter'>
                    <Board countInfo={countInfo}
                           errorInfo={errorInfo}
                           title={count} switcher={limit}/>
                </div>
                <div className='item'>
                    <Button onClick={clickHandlerUp}
                            disabled={errorInfo ? errorInfo : !countInfo ? !countInfo : count > maxCount - 1}>
                        inc
                    </Button>

                    <Button onClick={clickHandlerReset} disabled={count <= 0}>
                        reset
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
