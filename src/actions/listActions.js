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

export function resetItemAction() {
  return {
    type: actionTypes.RESET_ITEM,
  };
}

export function syncItemAction(existingItems) {
  return {
    type: actionTypes.SYNC_ITEM,
    payload: existingItems,
  };
}
