import React, {ChangeEvent, useEffect} from 'react';
import s from './ValueTable.module.css';
import {Button} from "../Button/Button";
import {NotifyType} from "../../App";
import {hint} from "../BoardTable/Board";

type ValueTablePropsType = {
    startValue: number
    maxValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    error: boolean
    setError: (value: boolean) => void
    setNotify: (value: NotifyType) => void
    notify: NotifyType
    setCount: (value: number) => void
}

export const ValueTable: React.FC<ValueTablePropsType> = (
    {
        startValue,
        maxValue,
        setStartValue,
        setMaxValue,
        error,
        setError,
        setNotify,
        notify,
        setCount,
    }
) => {

    useEffect(() => { // следит за ошибкой ввода START/MAX сетает ошибку, выводит надпись или отменяет ошибку
        if (maxValue < 0 || startValue >= maxValue) {
            setError(true);
            setNotify('incorrect value');
        } else if (startValue < 0 || startValue >= maxValue) {
            setError(true);
            setNotify('incorrect value');
        } else {
            setError(false);
        }
    }, [startValue, maxValue])

    const inputMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        // проверка если уже есть в сетейте этот результат
        if (notify !== hint.correct) setNotify('enter value and press "set"'); // ???

    }
    const inputStartChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        // проверка если уже есть в сетейте этот результат
        if (notify !== hint.correct) setNotify('enter value and press "set"'); // ???
    }
    const clickHandlerSet = () => {
        localStorage.setItem('maxCount', JSON.stringify(maxValue))
        localStorage.setItem('startCount', JSON.stringify(startValue))
        setNotify('')
        setCount(startValue)
        setMaxValue(maxValue)
        setStartValue(startValue)
    }

    const inputMaxStyle = error ? `${s.input__value} ${s.input__error}` : s.input__value
    const inputStartStyle = error ? `${s.input__value} ${s.input__error}` : s.input__value

    return (
        <>
            <div className={s.counterTable}>
                <div className={s.itemTable}>
                    <h2>Max value:</h2>
                    <input className={inputMaxStyle}
                           onChange={inputMaxChangeHandler}
                           value={maxValue}
                           type="number"/>
                </div>

                <div className={s.itemTable}>
                    <h2>Start value:</h2>
                    <input className={inputStartStyle}
                           onChange={inputStartChangeHandler}
                           value={startValue}
                           type="number"/>
                </div>
            </div>

            <div className={s.item__table}>
                <Button onClick={clickHandlerSet}
                        disabled={!(notify === hint.correct)}>
                    SET
                </Button>
            </div>
        </>
    );
};

