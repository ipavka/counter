import React from 'react';
import s from './Board.module.css'
import {NotifyType} from "../../App";

type BoarType = {
    title: number
    error: boolean
    maxValue: number
    notify: NotifyType
}

export const hint = {
    correct: 'enter value and press "set"',
    error: 'incorrect value'
}

export const Board: React.FC<BoarType> = (
    {
        title,
        error,
        maxValue,
        notify,
    }) => {

    // увеличивать шрифт при MAX значении
    const styleCounter = `${s.info__count} ${title >= maxValue ? error ? s.errorInfo : s.maxValue : ''}`
    // если нет ошибки, уменьшаем текст и убираем красный цвет
    const styleNotify = {
        color: notify === hint.error ? 'red' : '',
        fontSize: notify === hint.correct ? '35px' : '',
    }
    return (
        <div className={styleCounter} style={styleNotify}>
            {/* Если ошибка => текст ошибки, если нет то текст сообщения, если текст пуст => цифра счётчика */}
            {error ? notify : notify === '' ? title : notify}
        </div>

    );
};

