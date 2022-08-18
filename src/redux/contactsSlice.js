import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});
const persistConfig = {
  key: 'contactList',
  storage,
};
export const persistedContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
