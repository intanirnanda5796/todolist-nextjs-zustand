import create from 'zustand';
import { devtools } from 'zustand/middleware';

const handleAddTodo = (todo, data) => [
    ...todo,
    {
        id: Math.max(0, Math.max(...todo.map(listTodo => listTodo.id))) + 1,
        title: data.title,
        complete: false
    }
];

const handleCompleteTodo = (todo, id) => todo.map(listTodo => ({
    ...listTodo,
    complete: listTodo.id === id && true
}));

const handleUncompleteTodo = (todo, id) => todo.map(listTodo => ({
    ...listTodo,
    complete: listTodo.id === id && false
}));

const handleRemoveTodo = (todo, id) => todo.filter(listTodo => listTodo.id !== id);

const todoStore = (set) => ({
    todo: [
        { id: 1, title: "belajar zustand 1", complete: true },
        { id: 2, title: "belajar zustand 2", complete: false },
        { id: 3, title: "belajar zustand 3", complete: false },
    ],
    addTodo: (data) => set(state => ({
        ...state,
        todo: handleAddTodo(state.todo, data)
    })),
    deleteTodo: (id) => set(state => ({
        ...state,
        todo: handleRemoveTodo(state.todo, id)
    })),
    unCompleteTodo: (id) => set(state => ({
        ...state,
        todo: handleUncompleteTodo(state.todo, id)
    })),
    completeTodo: (id) => set(state => ({
        ...state,
        todo: handleCompleteTodo(state.todo, id)
    }))
});

const useTodoStore = create(devtools(todoStore));

export default useTodoStore;