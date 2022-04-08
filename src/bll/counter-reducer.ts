import {NotifyType} from "../App";

const initialState = {
    count: 0,
    limit: false,
    error: false,
    startValue: 0,
    maxValue: 5,
    notify: "" as NotifyType,
}
type InitialStateType = typeof initialState
export const counterReducer = (
    state: InitialStateType = initialState,
    action: counterReducerType): InitialStateType => {
    switch (action.type) {
        case "INC_VALUE": { // увеличение счётчика
            return {...state, count: state.count + 1}
        }
        case "RESET_VALUE": { // сброс на стартовое значение
            return {...state, count: action.value}
        }
        case "CHANGE_LIMIT": { // установка максимального значения, отключение/включение кнопки INC
            return {...state, limit: action.value}
        }
        case "RESET_INCORRECT_ERROR": { // логика ошибки <incorrect value>
            return {...state, error: action.value}
        }
        case "SET_START_VALUE": { // изменение значения START импута
            return {...state, startValue: action.value}
        }
        case "SET_MAX_VALUE": { // изменение значения MAX импута
            return {...state, maxValue: action.value}
        }
        case "NOTIFY_CHANGES_ERROR": { // изменение инфо панель "incorrect value"
            return {...state, notify: action.value}
        }
        case "NOTIFY_CHANGES_SET": { // изменение инфо панель "enter value and press "set""
            return {...state, notify: action.value}
        }
        case "NOTIFY_CHANGES_NONE": { // изменение инфо панель ""
            return {...state, notify: action.value}
        }
        default:
            return state;
    }
}
type counterReducerType = IncConteType | ResetValueType |
    ChangeLimitType | ErrorResetType | SetStartValueType |
    SetMaxValueType | NotifyChangesErrorType | NotifyChangesSetType |
    NotifyChangesNoneType

type IncConteType = ReturnType<typeof incCounterValueAC>
export const incCounterValueAC = () => ({type: "INC_VALUE"} as const)

type ResetValueType = ReturnType<typeof resetValueAC>
export const resetValueAC = (value: number) => ({type: "RESET_VALUE", value} as const)

type ChangeLimitType = ReturnType<typeof changeLimitAC>
export const changeLimitAC = (value: boolean) => ({type: "CHANGE_LIMIT", value} as const)

type ErrorResetType = ReturnType<typeof incorrectErrorResetAC>
export const incorrectErrorResetAC = (value: boolean) => ({type: "RESET_INCORRECT_ERROR", value} as const)

type SetStartValueType = ReturnType<typeof setStartValueAC>
export const setStartValueAC = (value: number) => ({type: "SET_START_VALUE", value} as const)

type SetMaxValueType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (value: number) => ({type: "SET_MAX_VALUE", value} as const)

type NotifyChangesErrorType = ReturnType<typeof notifyChangesErrorAC>
export const notifyChangesErrorAC = (value: NotifyType) => ({type: "NOTIFY_CHANGES_ERROR", value} as const)

type NotifyChangesSetType = ReturnType<typeof notifyChangesSetAC>
export const notifyChangesSetAC = (value: NotifyType) => ({type: "NOTIFY_CHANGES_SET", value} as const)

type NotifyChangesNoneType = ReturnType<typeof notifyChangesNoneAC>
export const notifyChangesNoneAC = (value: NotifyType) => ({type: "NOTIFY_CHANGES_NONE", value} as const)