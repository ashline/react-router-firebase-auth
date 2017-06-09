import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDna-3c345iylBCw6J8ebq8aD0eiP16tW8',
  authDomain: 'test-auth-c53af.firebaseapp.com',
  databaseURL: 'https://test-auth-c53af.firebaseio.com/',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
