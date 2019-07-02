import React, { Component } from 'react';
import Menu from '../menu/menu';
import { HeaderStyle, Container } from '../../styled/elements';

class Header extends Component {

    render() {
        return (
            <HeaderStyle primary>
                <Container>
                    { this.props.title }
                    <Menu></Menu>
                </Container>
            </HeaderStyle>
        )
    }
    
}


export default Header;