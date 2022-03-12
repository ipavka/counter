import React, {useEffect, useState} from 'react';
import '../App.css';

export const Localstorage = () => {

    const [value, setValue] = useState(0);

    useEffect(() => {
        getFromStorageHandler()
    }, [])

    useEffect(() => {
        setToStorageHandler()
    }, [value])

    const incHandler = () => {
        setValue(value + 1)

    }
    const setToStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }

    const getFromStorageHandler = () => {
        const valueAsString = localStorage.getItem('counterValue');
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString);
            setValue(newValue);
        }
    }
    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }
    const removeItemFromLocalStorageHandler = () => {
        localStorage.removeItem('counterValue + 1')
    }

    return (
        <div className="counter">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            {/*<button onClick={setToStorageHandler}>setToStorage</button>*/}
            {/*<button onClick={getFromStorageHandler}>getFromStorage</button>*/}
            {/*<button onClick={clearLocalStorageHandler}>clearLocalStorage</button>*/}
            {/*<button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>*/}
        </div>
    );
};

