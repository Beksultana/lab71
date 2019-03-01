import {ORDER_SUCCESS} from "../actions/actionTypes";

const initialState = {
    orders: null
};

const orderReducer = (state = initialState, action) => {

    switch (action.type) {
        case ORDER_SUCCESS:
            return {
                ...state,
                orders: action.ordersData
            };
        default:
            return state
    }
};

export default orderReducer;