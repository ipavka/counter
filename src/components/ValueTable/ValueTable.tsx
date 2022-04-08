import React, {ChangeEvent, useEffect} from 'react';
import s from './ValueTable.module.css';
import {Button} from "../Button/Button";
import {NotifyType} from "../../App";
import {hint} from "../BoardTable/Board";
import {useDispatch, useSelector} from "react-redux";
import {
    changeLimitAC,
    incorrectErrorResetAC, notifyChangesErrorAC, notifyChangesNoneAC, notifyChangesSetAC,
    resetValueAC,
    setMaxValueAC,
    setStartValueAC
} from "../../bll/counter-reducer";
import {AppStateType} from "../../bll/store";

type ValueTablePropsType = { error: boolean }

export const ValueTable: React.FC<ValueTablePropsType> = ({error, }) => {

    const dispatch = useDispatch()
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue); // Для импута START
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue); // Для импута MAX
    const notify = useSelector<AppStateType, NotifyType>(state => state.counter.notify); // инфо панель "NotifyType"

    useEffect(() => { // следит за ошибкой ввода START/MAX сетает ошибку, выводит надпись или отменяет ошибку
        if (maxValue < 0 || startValue >= maxValue) {
            dispatch(incorrectErrorResetAC(true)); // ошибка, красный импут
            dispatch(notifyChangesErrorAC('incorrect value'))
        } else if (startValue < 0 || startValue >= maxValue) {
            dispatch(incorrectErrorResetAC(true)); // ошибка, красный импут
            dispatch(notifyChangesErrorAC('incorrect value'))
        } else {
            dispatch(incorrectErrorResetAC(false)); // сброс ошибки(отмена красного импута)
            dispatch(resetValueAC(startValue)); // сброс значения в Board при изменении Max/Start значений
        }
    }, [startValue, maxValue])

    const inputMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(Number(e.currentTarget.value)));
        if (notify !== hint.correct) dispatch(notifyChangesSetAC('enter value and press "set"')); // ???

    }
    const inputStartChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(Number(e.currentTarget.value)))
        if (notify !== hint.correct) dispatch(notifyChangesSetAC('enter value and press "set"')); // ???
    }
    const clickHandlerSet = () => {
        localStorage.setItem('maxCount', JSON.stringify(maxValue))
        localStorage.setItem('startCount', JSON.stringify(startValue))
        dispatch(notifyChangesNoneAC(''))
        dispatch(resetValueAC(startValue)) // сброс значения...??
        dispatch(changeLimitAC(false)) // сброс disable кнопки INC
        dispatch(setMaxValueAC(maxValue));
        dispatch(setStartValueAC(startValue));
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

