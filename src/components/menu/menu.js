import React, { Component } from 'react';
import routesConfig from '../../routes';
import { Link } from 'react-router-dom';

import './menu.scss';

class Menu extends Component {

    render() {
        return (
            <nav className="menu">
                {
                    routesConfig.map((value, key ) => {

                        return <Link className="link-name" 
                        to={value.path} key={key}>{ value.title }</Link>

                    })
                }
            </nav>
        )
    }

}

export default Menu;
