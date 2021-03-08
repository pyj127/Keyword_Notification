const firebase = require('firebase');

const fdb = firebase.initializeApp({
  apiKey: "AIzaSyAHaizKd_x9xZfvEFD4jfAgoxpNl4C3OZo",
  authDomain: "keyword-notification-57876.firebaseapp.com",
  projectId: "keyword-notification-57876",
  storageBucket: "keyword-notification-57876.appspot.com",
  messagingSenderId: "1053305239002",
  appId: "1:1053305239002:web:1f1be0be627cc5883efce3",
  measurementId: "G-ZCNG4MWLK0"
});

module.exports = fdb;
