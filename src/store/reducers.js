
import { getStorageList, saveStorage } from '../services/storage.service';

export function todoReducer(state = getStorageList(), action) {

    let newState = [...state];

    switch (action.type) {
        case 'REMOVE_ITEM_LIST':
            newState.splice(action.indexItem, 1);
            saveStorage(newState);
            return newState;

        case  'TOOGLE_ITEM':
            newState = newState.map(item => {

                if (item.id === action.payload.id) {
                    item.isDone = !item.isDone;
                }

                return item;

            });

            saveStorage(newState);
            return newState;

        case 'ADD_ITEM_LIST':
            newState.push(action.payload);
            saveStorage(newState);
            return newState;  
              
        default:
            return state
    }

}