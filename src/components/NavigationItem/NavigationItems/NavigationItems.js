import React from 'react';
import NavigationItem from "../NavigationItem";
import './NavigationItems.css';

const NavigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem to="/dishes" exact >Dishes</NavigationItem>
            <NavigationItem to="/orders" exact >Orders</NavigationItem>
        </ul>
    );
};

export default NavigationItems;