 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
 // import { getFirestore, setDoc, addDoc,doc, updateDoc,deleteDoc, getDoc, query, collection, where, getDocs, onSnapshot  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
 import { getFirestore, addDoc,collection, connectFirestoreEmulator} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";



 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAsn-c-mwOiJOAnqDh6vq43_BUNzWXHLIk",
  authDomain: "myproject-cf492.firebaseapp.com",
  projectId: "myproject-cf492",
  storageBucket: "myproject-cf492.appspot.com",
  messagingSenderId: "625162921358",
  appId: "1:625162921358:web:c20577c94e9fd7643df0df",
  measurementId: "G-SV6PZQ0YYF"
};


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 // Initialize Cloud Firestore and get a reference to the service
 const db = getFirestore(app);
//  const firestoreemulate = connectFirestoreEmulator(db, 'localhost', 8080);

 submitData.addEventListener('click', (e) => {
     var title = document.getElementById('title').value;
     var content = document.getElementById('content').value;
     var createdAt = new Date().toISOString(); // Add current date as a string in ISO format

     const docRef = addDoc(collection(db, "blog"), {
        title: title,
        content: content,
        createdAt: createdAt // Add createdAt field to the blog data

     });
     
     alert('New Blog is added');
     // Reload the page after the user is added
     setTimeout(() => {
        window.location.href = 'blog.html';
      }, 2000);
 });


const titleTextarea = document.querySelector('#title');
const contentTextarea = document.querySelector('#content');
const saveButton = document.querySelector('#submitData');

// hide the save button initially
saveButton.style.display = 'none';

// add an input event listener to the textareas to check for user input
titleTextarea.addEventListener('input', showSaveButton);
contentTextarea.addEventListener('input', showSaveButton);

function showSaveButton() {
  // check if there is input in the title and content textareas
  if (titleTextarea.value.trim() !== '' && contentTextarea.value.trim() !== '') {
    saveButton.style.display = 'block';
  } else {
    saveButton.style.display = 'none';
  }
}