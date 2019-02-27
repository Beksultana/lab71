import {ADD_DISHES, DISH_FAILUER, DISH_REQUEST, DISH_SUCCESS} from "./actionTypes";
import axios from '../../axios-dishes';

export const addDishes = dishes => ({type: ADD_DISHES, dishes});

export const dishRequest = () => ({type: DISH_REQUEST});
export const dishSuccess = (data) => ({type: DISH_SUCCESS, data});
export const dishError = () => ({type: DISH_FAILUER});

export const getDishes = () => {
    return dispatch => {
        dispatch(dishRequest());
        axios.get('/dishes.json').then(
            response => dispatch(dishSuccess(response.data)),
            error => dispatch(dishError())
        )
    }
};