import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {deleteDish, getDishes} from "../../store/actions/action-dishes";
// import Spinner from "../../components/UI/Spinner/Spinner";

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
                <div className="Dishes">
                    <h3>Dishes</h3>
                    <button className="btn btn-primary" onClick={this.openNewDishHandler}>Add new Dishes</button>
                </div><hr/>
                <div className="ShowDishes">
                    {this.props.dishesState ?
                        Object.keys(this.props.dishesState).map((dish) => {
                            console.log(dish);
                            return (
                                <div key={dish} className="DishesItem">
                                    <div className="DishesInfo">
                                        <img src={this.props.dishesState[dish].dishesImage} alt="pizza"/><hr/>
                                        <h4>{this.props.dishesState[dish].dishesTitle}</h4>
                                        <p>Price: <strong>{this.props.dishesState[dish].dishesPrice}</strong> KGS </p>
                                    </div><hr/>
                                    <div className="Buttons">
                                        <button className="btn btn-primary ">Edit</button>
                                        <button onClick={this.props.deleteDishes.bind(this, dish)} className="btn btn-danger">Delete</button>
                                    </div>
                                </div>
                            )
                        })
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
        getDishes: () => dispatch(getDishes()),
        deleteDishes: (id) => dispatch(deleteDish(id))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Dishes);