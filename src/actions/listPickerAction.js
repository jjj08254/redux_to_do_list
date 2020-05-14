import * as actionTypes from './actionTypes';

export default function pickListAction(listName) {
  console.log('pick');
  console.log(listName);
  return {
    type: actionTypes.LIST_PICK,
    payload: listName,
  };
}
