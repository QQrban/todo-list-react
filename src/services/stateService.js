import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem('item')) || []
}

export const setTodos = createAction('setTodos');

const reducer = createReducer(initialState, {
    [setTodos]: (state, action) => {
        state.todos = action.payload
    }
});

export const store = configureStore({ reducer });