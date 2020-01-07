import React from 'react';
import { ListItem, List, Action, TitleList } from '../styled/elements';

import { connect } from 'react-redux';
import { removeItemList, toggleItemList } from '../store/actions';

const ListTodoComponent = ({ list, dispatch }) => (
    
    <List>

        { 
            
            list.map((item, index) => (
            
            <ListItem key={ item.id }>
                <TitleList decoration={ item.isDone ? 'risc' : '' }>{ item.title }</TitleList>
                <div>
                    <Action 
                        onClick={() => dispatch( toggleItemList(item) )}
                        color={ item.isDone ? 'out' : 'primary' }>
                        { item.isDone ? 'Desfazer' : 'Marcar' }
                    </Action>
                    <Action color="danger" 
                        onClick={() => dispatch( removeItemList(index) )}>Remover
                    </Action>
                </div>
            </ListItem>

        ))}

        
    </List>

);

export default connect(state => ({ list: state.todo }))(ListTodoComponent);