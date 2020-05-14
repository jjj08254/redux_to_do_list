import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAOg1ExxYY2smbb-K4fd93h6prYiNBR5pc',
  authDomain: 'redux-todo-list-jojo-jack.firebaseapp.com',
  databaseURL: 'https://redux-todo-list-jojo-jack.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebase };
export default base;
