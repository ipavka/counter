import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";
import {Board} from "./components/BoardTable/Board";
import {ValueTable} from "./components/ValueTable/ValueTable";

const START_VALUE = 0
const MAX_VALUE = 5

const App = () => {

    const [count, setCount] = useState<number>(START_VALUE);
    const [limit, setLimit] = useState<boolean>(false);
    const [errorInfo, setErrorInfo] = useState<boolean>(false);

    const clickHandlerUp = () => {
        setCount(count + 1)
        if (count >= MAX_VALUE - 1) {
            setLimit(true)
            setErrorInfo(true)
        }
    }
    const clickHandlerReset = () => {
        setCount(START_VALUE)
        setLimit(false)
        setErrorInfo(false)
    }

    return (
        <div className={'main'}>
            <div className="valueTable">
                <ValueTable/>
            </div>

            <div className="boardCounter">
                <div className='counter'>
                    <Board errorInfo={errorInfo}
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
