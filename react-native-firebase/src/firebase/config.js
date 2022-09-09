import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDNP80PAWhVPvZfhSaw6qF5HJlQIrXfQRk',
  authDomain: 'mobile-apps-programming-hw.firebaseapp.com',
  databaseURL: 'https://mobile-apps-programming-hw.firebaseio.com',
  projectId: 'mobile-apps-programming-hw',
  storageBucket: 'mobile-apps-programming-hw.appspot.com',
  messagingSenderId: '109946683620',
  appId: '1:109946683620:ios:b22bf395895baf34e5ecf1',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };