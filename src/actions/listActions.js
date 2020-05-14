import * as actionTypes from './actionTypes';

export function addItemAction(newItemTitle) {
  return {
    type: actionTypes.ADD_ITEM,
    payload: newItemTitle,
  };
}

export function deleteItemAction(selectedItem) {
  return {
    type: actionTypes.DELETE_ITEM,
    payload: selectedItem,
  };
}

export function checkItemAction(itemGotChecked) {
  return {
    type: actionTypes.CHECK_ITEM,
    payload: itemGotChecked,
  };
}
