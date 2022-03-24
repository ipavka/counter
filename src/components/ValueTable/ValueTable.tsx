import React, {ChangeEvent} from 'react';
import s from './ValueTable.module.css';
import {Button} from "../Button";

type ValueTablePropsType = {

}

export const ValueTable: React.FC<ValueTablePropsType> = () => {

    const valueNames = {
        max: 'max value:',
        start: 'start value:',
    }

    const inputMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }
    const inputStartChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
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
                    <input className={inputMaxStyle} onChange={inputMaxChangeHandler} value={5} type="number"/>
                </div>

                <div className={s.itemTable}>
                    <h2>{valueNames.start}</h2>
                    <input className={inputStartStyle} onChange={inputStartChangeHandler} value={0} type="number"/>
                </div>
            </div>

            <div className={s.item__table}>
                <Button onClick={clickHandlerSet} disabled={false}>set</Button>
            </div>
        </>
    );
};

