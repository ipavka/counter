import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Board} from "./components/Board";
import {ValueTable} from "./components/ValueTable/ValueTable";

const App = () => {

    const STARTCOUNT = 0
    const MAXVALUE = 5

    const [startCount, setStartCount] = useState<number>(STARTCOUNT);
    const [maxCount, setMaxCount] = useState<number>(MAXVALUE);
    const [count, setCount] = useState<number>(startCount);
    const [limit, setLimit] = useState<boolean>(true);

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
                />
            </div>

            <div className="boardCounter">
                <div className='counter'>
                    <Board title={count} switcher={limit}/>
                </div>
                <div className='item'>
                    <Button onClick={clickHandlerUp} disabled={count > maxCount - 1}>
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
