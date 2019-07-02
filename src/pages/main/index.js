import React, { Component } from 'react';
import api from '../../services/api';

import './main.scss';

class Main extends Component {

    state = {
        products: [],
        isLoading: false
    }

    componentDidMount() {

        this.loadProducts();

    }

    loadProducts = async () => {

        this.setState({
            isLoading: true
        });

        await api.get(`/products`).then(res => {
            
            this.setState({ isLoading: false, products: res.data.docs });

        });

    };

    openDetail(id) {

        console.log(`meu id é ${id}`);

    };

    render() {

        const { products } = this.state;

        return (
            <div>

                { this.state.isLoading &&
                    <h2>Carregando...</h2>
                }
                <div className="product-list">
                    { products.map(product => (
                        <article key={product._id} 
                        onClick={(e) => this.openDetail(product._id, e)}>
                            <strong>{ product.title }</strong>
                            <p>{ product.description }</p>
                            <a href="#">Acessar</a>
                        </article>
                    ))}
                </div>
            </div>
        )
    }

}

export default Main;