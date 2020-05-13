import * as actions from './actionTypes';

export const addItemAction = (itemArray) => {
  console.log('Added');
  return {
    type: actions.ADD_ITEM,
    payload: itemArray,
  };
};
