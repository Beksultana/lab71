import {DISH_DELETE, DISH_FAILUER, DISH_REQUEST, DISH_SUCCESS} from "./actionTypes";
import axios from '../../axios-dishes';

export const dishRequest = () => ({type: DISH_REQUEST});
export const dishSuccess = (data) => ({type: DISH_SUCCESS, data});
export const dishError = () => ({type: DISH_FAILUER});
export const dishDelete = (id) => ({type: DISH_DELETE, id});

export const getDishes = () => {
    return dispatch => {
        dispatch(dishRequest());
        axios.get('/dishes.json').then(
            response => dispatch(dishSuccess(response.data)),
            error => dispatch(dishError())
        )
    }
};