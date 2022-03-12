import React from 'react';
import '../App.css';

type BoarType = {
    title: number
    switcher: boolean
}

export const Board: React.FC<BoarType> = ({title, switcher}) => {

    const styleCounter = switcher ? {} : {
        color:'red',
        fontSize: '48px',
        paddingTop: '4%',
    }

    return (
        <h1 className={'info__count'} style={styleCounter}>{title}</h1>
    );
};

