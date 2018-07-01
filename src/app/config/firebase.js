import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyByg9guzcgl_gybZ3MXXpCY--6FEa0fm14",
    authDomain: "revents-48986.firebaseapp.com",
    databaseURL: "https://revents-48986.firebaseio.com",
    projectId: "revents-48986",
    storageBucket: "revents-48986.appspot.com",
    messagingSenderId: "795631828450"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
}

firestore.settings(settings);

export default firebase;
