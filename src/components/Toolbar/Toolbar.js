import React from 'react';
import NavigationItems from "../NavigationItem/NavigationItems/NavigationItems";

const Toolbar = () => {
    return (
        <header className="Toolbar">
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default Toolbar;