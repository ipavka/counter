import React from 'react';
import s from './Board.module.css'

type BoarType = {
    title: number | string
    errorInfo: boolean
}

export const Board: React.FC<BoarType> = (
    {
        title,
        errorInfo,
    }) => {

    // const hint = {
    //     correct: 'enter value and press enter',
    //     error: 'incorrect value'
    // }

    const styleCounter = `${s.info__count} ${errorInfo ? s.info__error : ''}`

    return (
        <div className={styleCounter}>
            {title}
        </div>

    );
};

