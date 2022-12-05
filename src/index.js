import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
  
todos: []
}
export const add = createAction('add')
export const del = createAction('del')
const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(add, (state, action) => {
      state.todos.push(action.payload)
    })
    .addCase(del, (state, action) => {

     state.todos =  state.todos.filter((el, index) => {
        if (el.id === action.payload) {
          return false
        }

        return true

      }
      )
      console.log(state);
    })
})
const store = configureStore({
  reducer: todoReducer
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
