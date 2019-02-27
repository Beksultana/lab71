import {DISH_FAILUER, DISH_REQUEST, DISH_SUCCESS} from "../actions/actionTypes";

const initialState = {
    dishes: {},
    loading: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case DISH_REQUEST:
            console.log('DISH_REQUEST');
            return {
                ...state,
                loading: true
            };
        case DISH_SUCCESS:
            console.log('DISH_SUCCESS', action.data);
            return {
                ...state,
                loading: false,
                dishes: action.data
            };
        case DISH_FAILUER:
            return (
                console.log('Error')
            );
        default:
            return state;
    }
};

export default reducer;