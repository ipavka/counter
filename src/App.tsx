import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Board} from "./components/Board";

function App() {

    const MAXVALUE = 5
    const STARTCOUNT = 0

    const [count, setCount] = useState<number>(STARTCOUNT);
    const [limit, setLimit] = useState<boolean>(true);

    const clickHandlerUp = () => {
        setCount(count + 1)
        if (count >= MAXVALUE-1) {
            setLimit(false)
        }
    }

    const clickHandlerReset = () => {
        setCount(STARTCOUNT)
        setLimit(true)
    }

    return (

        <div className="App">
            <div className='counter'>
                <Board title={count} switcher={limit}/>
            </div>
            <div className='item'>

                <Button onClick={clickHandlerUp} disabled={count > MAXVALUE-1}>
                    inc
                </Button>

                <Button onClick={clickHandlerReset} disabled={count <= 0}>
                    reset
                </Button>

            </div>
        </div>
    );
}

export default App;
