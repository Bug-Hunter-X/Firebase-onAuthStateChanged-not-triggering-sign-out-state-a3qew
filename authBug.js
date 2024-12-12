const unsubscribe = onAuthStateChanged(auth, (user) => {if (user) {  // Check if a user is signed in
    // Get the current user's UID
    const uid = user.uid; 
    console.log('User signed in:', uid);
    // Perform actions based on the user being signed in
  } else {
    // Perform actions based on the user being signed out
    console.log('User signed out');
  }});

// unsubscribe from the listener when you are done
// unsubscribe();