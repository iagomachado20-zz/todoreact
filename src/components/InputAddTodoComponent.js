import React, { useState } from 'react';
// Estilos dos Elementos Definidos por StyledComponents
import { ContainerAddTodo, InputBigger, Button } from '../styled/elements';

// Conecta o State Armazenado na Store com o Componente
import { connect } from 'react-redux'

// Importa uma Action que será usada no componente
import { addNewItemList } from '../store/actions';

// Gera um Id Dinâmico
function generateIdList(list) {
    if (!list.todo.length) return 0;
    return list.todo.length + 1;
}

// Dispatch dispara Ações/Actions para os Reducers
const AddTodoComponent = ({ list, dispatch }) => {

    // React Hooks sendo text a variavel e setText o método que atualiza a variavel text
    // useState define o valor de text como vazio inicialmente
    const [ text, setText ] = useState('');

    return (

        <ContainerAddTodo>
            <InputBigger
                onChange={ (e) => setText(e.target.value)}
                value={text} 
                type="text" placeholder="O que você quer fazer ?">
            </InputBigger>
            <Button onClick={() => {
                if (text === '') return false;
                dispatch(addNewItemList({
                    isDone: false,
                    title: text,
                    id: generateIdList(list)
                }));
                setText('');
            }}>Add</Button>
        </ContainerAddTodo>
    
    );

};

// Design Pattern de High Order Functions // Decorator
export default connect(state => ({ list: state }))(AddTodoComponent);