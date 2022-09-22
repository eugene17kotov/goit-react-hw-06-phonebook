// import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { addContact, deleteContact, filterValue } from './actions';

// const itemsSlice = createSlice({
//   name: 'items',
//   initialState: [],
//   reducers: {
//     addContact(state, action) {
//       state.push(action.payload);
//     },
//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload.id);
//     },
//   },
// });

// export const { addContact, deleteContact } = itemsSlice.actions;

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     filterValue(state, action) {
//       return (state = action.payload);
//     },
//   },
// });

// export const { filterValue } = filterSlice.actions;

// export const contactsReducer = combineReducers({
//   items: itemsSlice.reducer,
//   filter: filterSlice.reducer,
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsReducer
// );

// TOOLKIT REDUCERS

import { createReducer } from '@reduxjs/toolkit';

const itemsInitialState = [];

const filterInitialState = '';

const itemsReducer = createReducer(itemsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload.id),
});

const filterReducer = createReducer(filterInitialState, {
  [filterValue]: (state, action) => (state = action.payload),
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);

// VANILLA REDUX

// const initialState = {};

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
