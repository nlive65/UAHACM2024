import { Navbar } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Home from './components/Home.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
// import { GoogleAuthProvider, getAuth,} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


const firebaseConfig = {

    apiKey: "AIzaSyCJbmNOCxxLmHk4VOTcDMmJPshXsiO-2Dg",

    authDomain: "greenlens-18ee7.firebaseapp.com",

    projectId: "greenlens-18ee7",

    storageBucket: "greenlens-18ee7.appspot.com",

    messagingSenderId: "1094056209034",

    appId: "1:1094056209034:web:73080d08a92387fa301b73",

    measurementId: "G-F0PGRS9ESW"

};

const app = initializeApp(firebaseConfig);

// const card = document.querySelector("");
// const name = document.getElementById("")

// const googleSignBtn = document.getElementById("google");
// googleSignBtn.addEventListener("click", ()=>)



function App() {
  return (
    <div className="App">
      <NavbarComp/>
    </div>
  );
}

export default App;
