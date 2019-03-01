import axios from '../../axios-dishes';
import {ORDER_FAILUER, ORDER_REQUEST, ORDER_SUCCESS} from "./actionTypes";


export const orderRequest = () => ({type: ORDER_REQUEST});
export const orderSuccess = (ordersData) => ({type: ORDER_SUCCESS, ordersData});
export const orderError = () => ({type: ORDER_FAILUER});

export const getOrderesInfo = () => {
    return dispatch => {
        dispatch(orderRequest());

        axios.get('/orders.json').then(response => {
            console.log(response.data);
            dispatch(orderSuccess(response.data),
                    error => dispatch(orderError()))
            }
        )
    }
};