import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAJfR6t8f5BWXn5ISe3VHOhwswLtUhUjBQ",
  authDomain: "quiz-buzzer-app-1ec1a.firebaseapp.com",
  databaseURL: "https://quiz-buzzer-app-1ec1a-default-rtdb.firebaseio.com",
  projectId: "quiz-buzzer-app-1ec1a",
  storageBucket: "quiz-buzzer-app-1ec1a.appspot.com",
  messagingSenderId: "493965762049",
  appId: "1:493965762049:web:9bfa98d3622888ba78ea00",
  measurementId: "G-XMEFN3653Q"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
