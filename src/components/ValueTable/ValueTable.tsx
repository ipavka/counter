import React, {ChangeEvent, useEffect, useState} from 'react';
import './ValueTable.css';
import {Button} from "../Button";

type ValueTablePropsType = {
    setMax?: (value: number) => void
    setStart?: (value: number) => void
    inputValueMax?: number
    inputValueStart?: number
    setStartHandler: (value: number) =>void
    setMaxHandler: (value: number) =>void
}

export const ValueTable: React.FC<ValueTablePropsType> = (
    {
        setStart,
        setMax,
        setStartHandler,
        setMaxHandler,
        inputValueMax,
        inputValueStart,
        children
    }
) => {

    const valueNames = {
        max: 'max value:',
        start: 'start value:',
    }

    let [countMax, setCountMax] = useState(0);
    let [countStart, setCountStart] = useState(0);

    useEffect(() => {
        getFromStorageHandler()
    }, [])

    const getFromStorageHandler = () => {
         const valueStartCount = localStorage.getItem('startCount');
         const valueMax = localStorage.getItem('maxCount');
         if (valueStartCount) {
             let newValue1 = JSON.parse(valueStartCount);
             setCountStart(newValue1);
         }
         if (valueMax) {
             let newValue2 = JSON.parse(valueMax);
             setCountMax(newValue2);
         }
    }

    const inputMaxChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        let valueMax = +e.currentTarget.value
        if(setMax){
            setMax(valueMax)
            setCountMax(valueMax)
        }

    }
    const inputStartChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        let valueStart = +e.currentTarget.value
        if (setStart) {
            setStart(valueStart)
            setCountStart(valueStart)
        }
    }

    const clickHandlerSet = () => {
        console.log(countStart)
        setStartHandler(countStart)
        setMaxHandler(countMax)
        // localStorage.setItem('startCount', JSON.stringify(countStart))
        // localStorage.setItem('maxCount', JSON.stringify(countMax))
        // if (setStart) {
        //     setStart(countStart)
        // }
    }

    return (
        <>
            <div className='counterTable'>
                <div className={'itemTable'}>
                    <h2>{valueNames.max}</h2>
                    <input onChange={inputMaxChangeHandler} value={inputValueMax} type="number"/>
                </div>

                <div className={'itemTable'}>
                    <h2>{valueNames.start}</h2>
                    <input onChange={inputStartChangeHandler} value={inputValueStart} type="number"/>
                </div>
            </div>

            <div className={'item__table'}>
                <Button onClick={clickHandlerSet}>set</Button>
            </div>
        </>
    );
};

