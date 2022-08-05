import {Dispatch} from "redux"
export const depositMoney = (amount) => {
    return (Dispatch) => {
        Dispatch({
            type: "deposit",
            payload: amount
        });
    }
}


export const withdrawMoney = (amount) => {
    console.log(amount, "Lol")
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        });
    }
}