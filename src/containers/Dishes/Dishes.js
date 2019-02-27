import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {getDishes} from "../../store/actions/action-dishes";
import Spinner from "../../components/UI/Spinner/Spinner";
import './Dishes.css';

class Dishes extends Component {

    componentDidMount(){
        this.props.getDishes()
    }

    openNewDishHandler = () => {
        return this.props.history.push('/addNewDish')
    };

    render() {
        return (
            <Fragment>
                {this.props.loading ?
                    <Spinner/> :
                    <div className="Dishes">
                        <h1>Dishes</h1>
                        <button onClick={this.openNewDishHandler}>Add new Dish</button>
                    </div>
                }
                <div className="ShowDishes">
                    {this.props.dishesState ?
                        Object.keys(this.props.dishesState).map(dish => (
                            <div className="DishesItem">
                                <img src={this.props.dishesState[dish].dishesImage} alt="pizza"/><hr/>
                                <h1>{this.props.dishesState[dish].dishesTitle}</h1>
                                <p>Price: <strong>{this.props.dishesState[dish].dishesPrice}</strong> KGS </p>
                            </div>
                        ))
                        : null
                    }
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        dishesState: state.reducerDish.dishes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getDishes: () => dispatch(getDishes())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Dishes);