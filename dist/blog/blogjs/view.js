     // Import the functions you need from the SDKs you need
     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
     // import { getFirestore, setDoc, addDoc,doc, updateDoc,deleteDoc, getDoc, query, collection, where, getDocs, onSnapshot  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
    //  import { getFirestore, getDoc, doc, updateDoc, deleteDoc, connectFirestoreEmulator} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
     import { getFirestore, getDoc, doc, updateDoc, deleteDoc, connectFirestoreEmulator} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

     // TODO: Add SDKs for Firebase products that you want to use
     // https://firebase.google.com/docs/web/setup#available-libraries
 
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



    const urlParams = new URLSearchParams(window.location.search);
     const ids = urlParams.get('id');
//     //  Remove the id parameter from the URL
//  history.pushState({}, null, window.location.pathname);
 
//  // Now the URL doesn't have the id parameter
//  console.log(window.location.href); // http://127.0.0.1:5501/sam.html


 const deleteDatabtn = document.getElementById('deleteData');

 deleteDatabtn.addEventListener('click', (e) => {
 const confirmed = confirm('Are you sure you want to delete this user? This action cannot be undone.');
   if (confirmed) {
     deleteDoc(doc(db, "blog", id));
     alert('Blog deleted!');
     console.log('Blog deleted!');
     // Delay the redirect for 2 seconds
     setTimeout(() => {
       window.location.href = 'blog.html';
     }, 2000);
   }
 });
 
  // to hidden the id parameter in url
     if (ids) {
      sessionStorage.setItem("blogId", ids);
    
      // Remove the "id" parameter from the URL
      history.pushState({}, null, window.location.pathname);
    }
    
    // Retrieve the "id" value from sessionStorage
    const id = sessionStorage.getItem("blogId");
     
    const blogSection = document.querySelector('.blog');


     // getSpecificData.addEventListener('click', (e) => {
   const docRef = doc(db, 'blog', id);
   getDoc(docRef)
     .then(docSnap => {
       if (docSnap.exists()) {
         const data = docSnap.data();
         const title = data.title;
         const content = data.content;
         const createdAt = data.createdAt;
 
         blogSection.innerHTML += `
         <button type="button" id="editData" name="editData" class="editbtn"><i class="fa-solid fa-pen-to-square"></i></button>
         <textarea type="text" readonly id="title" class="title" placeholder="Header/Title">${title} </textarea>
         <span class="published">--Published on ${new Date(createdAt).toLocaleString()}</span>
         <br>
         <textarea type="text" readonly id="content" class="article" placeholder="Start writing here..."> ${content}</textarea>
     `;

     const editButton = document.querySelector('#editData');
    //  editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Edit';
     const titleTextarea = document.querySelector('#title');
    const contentTextarea = document.querySelector('#content');
    const updateButton = document.createElement('button');
        updateButton.type = 'button';
        updateButton.id = 'updateData';
        updateButton.name = 'updateData';
        updateButton.className = 'updatebtn';
        updateButton.textContent = 'Save Edit';
        // updateButton.innerHTML = '<i class="iconsave fa-solid fa-floppy-disk"></i>';


      /// Add event listener to the Edit button
      editButton.addEventListener('click', () => {
        // Set the readonly attribute to false for both textareas
        titleTextarea.removeAttribute('readonly');
        contentTextarea.removeAttribute('readonly');
        titleTextarea.focus(); // focus on the title textarea
        blogSection.replaceChild(updateButton, editButton); // replace Edit button with Update button
      });

      updateButton.addEventListener('click', () => {
        const updatedTitle = titleTextarea.value.trim();
        const updatedContent = contentTextarea.value.trim();
        const editOn = new Date().toISOString(); // Add current date as a string in ISO format
        
        
        // Check if there are any changes in the values
        if (updatedTitle == title && updatedContent == content) {
          alert('No changes to save.');
          location.reload();
          return;
        }

        updateDoc(docRef, {
          title: updatedTitle,
          content: updatedContent,
          edited: editOn
        })
          .then(() => {
            alert('Document updated successfully!');
            console.log('Document updated successfully!');
            titleTextarea.setAttribute('readonly', true);
            contentTextarea.setAttribute('readonly', true);
            blogSection.replaceChild(editButton, updateButton); // replace Update button with Edit button
          })
          .catch(error => {
            console.log('Error updating document:', error);
          });
      });
       } else {
         console.log('Document does not exist!');
       }
     })
     .catch(error => {
       console.log('Error getting document:', error);
     });
 
 
   