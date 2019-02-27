import React, {Component} from 'react';
import axios from '../../axios-dishes.js';
import './NewDishAdd.css';

class NewDishAdd extends Component {

    state = {
        dishesTitle: '',
        dishesPrice: '',
        dishesImage: '',
    };

    OnChangeDishHandler = event => {
        const name = event.target.name;
        this.setState({[name]: event.target.value})
    };

    dishesAdded = event => {
        event.preventDefault();

        const dishes = {
            dishesTitle: this.state.dishesTitle,
            dishesPrice: this.state.dishesPrice,
            dishesImage: this.state.dishesImage,
        };

        axios.post('/dishes.json', dishes).finally(() => {
            this.props.history.push('/dishes')
        })
    };

    render() {
        return (
            <div className="NewDishAdd">
                <h3>Added new dishes</h3>
                <div className="NewDishFormBlock">
                    <label>Enter a name dishes...</label>
                    <input className="form-control input" value={this.state.dishesTitle} onChange={this.OnChangeDishHandler}
                           type="text"  name="dishesTitle"/>
                    <label>Enter a price dishes...</label>
                    <input className="form-control input" value={this.state.dishesPrice} onChange={this.OnChangeDishHandler}
                           type="text"  name="dishesPrice"/>
                    <label>Enter a image dishes...</label>
                    <input className="form-control input" value={this.state.dishesImage} onChange={this.OnChangeDishHandler}
                           type="text"  name="dishesImage"/>
                    <button className="btn btn-primary" onClick={this.dishesAdded}>Added</button>
                </div>
            </div>
        );
    }
}

export default NewDishAdd;