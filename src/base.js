import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDfcS7BBZaNEHPwIxluRoVPRbY800gBQVY",
    authDomain: "catch-of-the-day-shaun-yee-1.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-shaun-yee-1.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
