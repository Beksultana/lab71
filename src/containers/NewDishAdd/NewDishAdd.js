import React, {Component} from 'react';
import axios from '../../axios-dishes.js';

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
                <input value={this.state.dishesTitle} onChange={this.OnChangeDishHandler}
                       type="text" placeholder="Enter a name dishes..." name="dishesTitle"/>
                <input value={this.state.dishesPrice} onChange={this.OnChangeDishHandler}
                       type="text" placeholder="Enter a price..." name="dishesPrice"/>
                <input value={this.state.dishesImage} onChange={this.OnChangeDishHandler}
                       type="text" placeholder="Enter a link image..." name="dishesImage"/>
                <button onClick={this.dishesAdded}>Added</button>
            </div>
        );
    }
}

export default NewDishAdd;