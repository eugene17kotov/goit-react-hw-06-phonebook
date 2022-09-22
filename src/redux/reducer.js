// const initialState = {};

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { addContact, deleteContact, filterValue } from './actions';

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
