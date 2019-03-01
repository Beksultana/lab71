import React, {Component} from 'react';
import {getOrderesInfo} from "../../store/actions/action-orders";
import {connect} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {

    componentDidMount(){
        this.props.getOrdersInfo()
    }

    render() {
        console.log(this.props.dishesState);
        if (!this.props.orders){
            return <Spinner/>
        }

        const orders = Object.keys(this.props.orders).map(orderId => {
            let ordersPrice = 0;
            let order = this.props.orders[orderId];
            return (
                <div>
                    <p><strong>Order ID : {orderId}</strong></p>

                </div>

            )
        });

        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.ordersReducer.orders,
        dishesState: state.reducerDish.dishes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getOrdersInfo: () => dispatch(getOrderesInfo())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);