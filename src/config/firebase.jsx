import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyDc0eqMUCNye7aamG9bN7pJGnJlukzAueI",
    authDomain: "hotelmanagement-bb68d.firebaseapp.com",
    projectId: "hotelmanagement-bb68d",
    storageBucket: "hotelmanagement-bb68d.appspot.com",
    messagingSenderId: "501495899562",
    appId: "1:501495899562:web:9bd2f7f7277283386537d3",
    measurementId: "G-F8HP3HF7VL"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);