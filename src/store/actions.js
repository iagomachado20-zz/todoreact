export function addNewItemList(item) {
    return {
        type: 'ADD_ITEM_LIST',
        payload: item
    }
}

export function removeItemList(index) {
    return {
        type: 'REMOVE_ITEM_LIST',
        indexItem: index
    }
}

export function toggleItemList(item) {
    return {
        type: 'TOOGLE_ITEM',
        payload: item
    }
}