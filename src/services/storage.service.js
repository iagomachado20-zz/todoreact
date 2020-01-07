// Serviço para retornar a Lista Armazenada em LocalStorage
export function getStorageList() {

    const storage = JSON.parse(localStorage.getItem('listTodo')) || [];
    return storage;
    
}

// Serviço para salvar o novo estado da lista em LocalStorage
export function saveStorage(list) {
    localStorage.setItem('listTodo', JSON.stringify(list));
}