import * as actionTypes from './actionTypes';

export function pickListAction(listName) {
  return {
    type: actionTypes.LIST_PICK,
    payload: listName,
  };
}

export function pageRefreshAction(listId) {
  return {
    type: actionTypes.PAGE_REFRESH,
    payload: listId,
  };
}
