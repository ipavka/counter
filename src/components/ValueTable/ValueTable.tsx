import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ValueTable.module.css';
import {Button} from "../Button";

type ValueTablePropsType = {
    setMax: (value: number) => void
    setStart: (value: number) => void
    inputValueMax: number
    inputValueStart: number
    setStartHandler: (value: number) =>void
    setMaxHandler: (value: number) =>void
    bordChangeState: (value: boolean) => void
    errorInfoHandler: (value: boolean) => void
}

export const ValueTable: React.FC<ValueTablePropsType> = (
    {
        setStart,
        setMax,
        setStartHandler,
        setMaxHandler,
        inputValueMax,
        inputValueStart,
        bordChangeState,
        errorInfoHandler,
    }
) => {

    const valueNames = {
        max: 'max value:',
        start: 'start value:',
    }

    const [countMax, setCountMax] = useState<number>(inputValueMax);
    const [countStart, setCountStart] = useState(inputValueStart);
    const [change, setChange] = useState(true);

    useEffect(() => {
        const startColorSet = countStart < 0 || countMax <= countStart
        const maxColorSet = countMax <= countStart
        const changeValue = countMax === inputValueMax && countStart === inputValueStart
        const changeValue1 = countMax === inputValueMax && countStart === inputValueStart
            || countStart < 0 || countMax <= countStart

        setChange(changeValue1) // выключение кнопки set
        bordChangeState(changeValue) // статус изменения
        errorInfoHandler(maxColorSet || startColorSet) // ошибка
    }, [countMax, countStart])


    const inputMaxChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {

        let valueMax = +e.currentTarget.value
        setCountMax(valueMax)
    }
    const inputStartChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        let valueStart = +e.currentTarget.value
        setCountStart(valueStart)
    }

    const clickHandlerSet = () => {
        bordChangeState(true)
        setChange(true)
        setStartHandler(countStart)
        setMaxHandler(countMax)
        localStorage.setItem('startCount', JSON.stringify(countStart))
        localStorage.setItem('maxCount', JSON.stringify(countMax))
        if (setStart) {
            setStart(countStart)
        }
        if(setMax){
            setMax(countMax)
        }
    }

    const startColorSet = countStart < 0 || countMax <= countStart
    const maxColorSet = countMax <= countStart

    const inputMaxStyle = `${s.input__value} ${maxColorSet ? s.input__error : ''}`
    const inputStartStyle = `${s.input__value} ${startColorSet ? s.input__error : ''}`

    return (
        <>
            <div className={s.counterTable}>
                <div className={s.itemTable}>
                    <h2>{valueNames.max}</h2>
                    <input className={inputMaxStyle} onChange={inputMaxChangeHandler} value={countMax} type="number"/>
                </div>

                <div className={s.itemTable}>
                    <h2>{valueNames.start}</h2>
                    <input className={inputStartStyle} onChange={inputStartChangeHandler} value={countStart} type="number"/>
                </div>
            </div>

            <div className={s.item__table}>
                <Button onClick={clickHandlerSet} disabled={change}>set</Button>
            </div>
        </>
    );
};

