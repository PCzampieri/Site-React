const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
    apiKey: "AIzaSyBtLhk0PJlq9J2fxVST2FDSM9ShpGfBioI",
    authDomain: "xumes-portifolio2.firebaseapp.com",
    databaseURL: "https://xumes-portifolio2.firebaseio.com",
    projectId: "xumes-portifolio2",
    storageBucket: "xumes-portifolio2.appspot.com",
    messagingSenderId: "1092549606500"
  }
  
  const app = firebase.initializeApp(FirebaseConfig)
  const config = Rebase.createClass(app.database())

  export const storage = app.storage()
  export const auth = app.auth()

  export default config 
