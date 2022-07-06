import {createSlice, nanoid} from '@reduxjs/toolkit';
import {removeElementFromList, updateElementFromList} from '../utils/util';

export const objectsSlice = createSlice({
  name: 'objects',
  initialState: [],
  reducers: {
    addObject: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({
        tagName,
        tagType,
        vendorName,
        confidentiality,
        itDisplaced,
        packageType,
        rssi,
        createdDate,
      }) {
        return {
          payload: {
            id: nanoid(),
            tagName,
            tagType,
            vendorName,
            confidentiality,
            itDisplaced,
            packageType,
            rssi,
            createdDate,
          },
        };
      },
    },
    removeObject(state, action) {
      return removeElementFromList([...state], action.payload);
    },
    updateObject: {
      reducer(state, action) {
        return updateElementFromList(
          [...state],
          action.payload.id,
          action.payload,
        );
      },
      prepare({
        id,
        tagName,
        tagType,
        vendorName,
        confidentiality,
        itDisplaced,
        packageType,
        rssi,
        createdDate,
      }) {
        return {
          payload: {
            id,
            tagName,
            tagType,
            vendorName,
            confidentiality,
            itDisplaced,
            packageType,
            rssi,
            createdDate,
          },
        };
      },
    },
  },
});

export const {addObject, removeObject, updateObject} = objectsSlice.actions;
