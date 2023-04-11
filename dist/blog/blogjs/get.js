import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
 // import { getFirestore, setDoc, addDoc,doc, updateDoc,deleteDoc, getDoc, query, collection, where, getDocs, onSnapshot  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
 import { getFirestore, addDoc,collection, getDocs, connectFirestoreEmulator} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

 
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



const blogSection = document.querySelector('.blogs-section');
const blogcontainer = document.querySelector('.blog-container');


// / Check if there are any blogs in the Firestore database
getDocs(collection(db, "blog")).then(docSnap => {
  if (docSnap.size == 0) {
    // Display a message or HTML telling the user to start their first blog
    blogcontainer.innerHTML += `
    <div>
      <p class="message">Start your first blog now!</p>
      <button class="writebtn"><a href="writing-blog.html" class="writelnk" >Write a Blog</a></button>
    </div>
  `;
  } else {
    // Display the blogs
    let users = [];
    docSnap.forEach((doc)=> {
      const data = doc.data();
      const title = data.title;
      const content = data.content;
      const createdAt = data.createdAt;
      users.push({ ...data, id: doc.id });
      console.log("New Document data:", 'blog');
      blogSection.innerHTML += `
        <div class="blog-card">
          <h1 class="blog-title">${title.substring(0, 100) + '...'}</h1>
          <p class="blog-overview">${content.substring(0, 200) + '...'}</p>
          <span class="published"> --Published on ${new Date(createdAt).toLocaleString()}</span>
          <br>
          <br>
          <a href="view-blog.html?id=${doc.id}" class="btn dark">read</a>
        </div>
      `;
    });
  }
});
