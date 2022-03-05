import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyCOJezooiZp8PMryFzh-jworelXbXHmJWg",
    authDomain: "sparta-myhoneytip-so-c9d01.firebaseapp.com",
    projectId: "sparta-myhoneytip-so-c9d01",
    databaseURL: "https://sparta-myhoneytip-so-c9d01-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "sparta-myhoneytip-so-c9d01.appspot.com",
    messagingSenderId: "1056265468965",
    appId: "1:1056265468965:web:96793509b42f6f254713cc",
    measurementId: "G-3YKF5XC7VD"
  };

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()