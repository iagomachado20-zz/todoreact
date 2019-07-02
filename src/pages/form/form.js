import React, { Component } from 'react';

class FormBase extends Component {

    state = {
        data: { 
            nome: 'Iago', 
            email: 'machado.iago@gmail.com' 
        }
    }

    changeInput = (event) => { 

        let target = event.target;
        let index = target.name;

        this.setState({
            data: {
                [index]: target.value
            }
        });

    }

    render() {

        return(
            <div className="form-base">
                <h3>{ this.props.titleForm }</h3>
                <form className="form">
                    <div className="form-group">
                       <label>Nome</label>
                       <input type="text" className="form-control" name="nome" 
                       value={this.state.data.nome} 
                       onChange={this.changeInput}></input>
                    </div>
                    <div className="form-group">
                       <label>E-mail</label>
                       <input type="email" className="form-control" name="email" 
                       value={this.state.data.email} 
                       onChange={this.changeInput}></input>
                    </div>
                </form>    
            </div>
        );

    }


}

export default FormBase;