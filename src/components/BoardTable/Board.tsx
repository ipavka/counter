import React from 'react';
import s from './Board.module.css'

type BoarType = {
    title: number
    error: boolean
}

export const Board: React.FC<BoarType> = (
    {
        title,
        error,
    }) => {

    // const hint = {
    //     correct: 'enter value and press enter',
    //     error: 'incorrect value'
    // }

    const styleCounter = `${s.info__count} ${error ? s.info__error : ''}`

    return (
        <div className={styleCounter}>
            {title}
        </div>

    );
};

