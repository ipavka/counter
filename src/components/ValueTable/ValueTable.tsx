import React, {ChangeEvent} from 'react';
import s from './ValueTable.module.css';
import {Button} from "../Button/Button";

type ValueTablePropsType = {
    startValue: number
    maxValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
}

export const ValueTable: React.FC<ValueTablePropsType> = (
    {
        startValue,
        maxValue,
        setStartValue,
        setMaxValue
    }
) => {

    const valueNames = {
        max: 'max value:',
        start: 'start value:',
    }

    const inputMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }
    const inputStartChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const clickHandlerSet = () => {
        console.log('clickHandlerSet')
    }

    const inputMaxStyle = s.input__value
    const inputStartStyle = s.input__value

    return (
        <>
            <div className={s.counterTable}>
                <div className={s.itemTable}>
                    <h2>{valueNames.max}</h2>
                    <input className={inputMaxStyle} onChange={inputMaxChangeHandler} value={maxValue} type="number"/>
                </div>

                <div className={s.itemTable}>
                    <h2>{valueNames.start}</h2>
                    <input className={inputStartStyle} onChange={inputStartChangeHandler} value={startValue} type="number"/>
                </div>
            </div>

            <div className={s.item__table}>
                <Button onClick={clickHandlerSet} disabled={false}>set</Button>
            </div>
        </>
    );
};

