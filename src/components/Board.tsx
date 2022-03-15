import React from 'react';
import '../App.css';

type BoarType = {
    title: number | string
    switcher: boolean
    countInfo: boolean
    errorInfo: boolean
}

export const Board: React.FC<BoarType> = (
    {
        title,
        switcher,
        countInfo,
        errorInfo,
    }) => {

    const hint = {
        correct: 'enter value and press enter',
        error: 'incorrect value'
    }

    const styleCounter = switcher ? errorInfo ? {color: 'red'} : {} : {
        color: 'red',
        fontSize: '48px',
        paddingTop: '4%',
    }

    return (
        <h1 className={'info__count'}
            style={styleCounter}>
            {errorInfo ? hint.error : !countInfo ? hint.correct : title}
        </h1>
    );
};

