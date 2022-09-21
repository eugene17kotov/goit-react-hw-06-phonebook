// const INCREMENT = 'counter/increment';

// function increment(amount) {
//   return {
//     type: INCREMENT,
//     payload: amount,
//   };
// }

// const action = increment(3);

import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');

export const deleteContact = createAction('contacts/deleteContact');

export const filterValue = createAction('contacts/filterValue');
