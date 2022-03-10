import React from 'react';

type BoarType = {
    title: number
    switcher: boolean
}

export const Board: React.FC<BoarType> = ({title, switcher}) => {

    const styleCounter = {color: switcher ? '' : 'red'}

    return (
        <h1 style={styleCounter}>{title}</h1>
    );
};

