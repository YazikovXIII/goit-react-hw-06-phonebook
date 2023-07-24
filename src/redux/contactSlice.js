import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteUser(state, action) {
      return state.filter(user => user.id !== action.payload);
    },
  },
});

export const { deleteUser, addUser } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
