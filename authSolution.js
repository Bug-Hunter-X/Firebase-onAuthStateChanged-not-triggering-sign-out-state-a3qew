import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

let unsubscribe;

function setupAuthListener() {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('User signed in:', uid);
    } else {
      // User is signed out
      console.log('User signed out');
    }
  });
}

function cleanupAuthListener() {
  if (unsubscribe) {
    unsubscribe();
    console.log('Auth listener unsubscribed');
    unsubscribe = null;
  }
}

// Initial setup of the listener
setupAuthListener();

// Example of signing out and cleaning up
document.getElementById('signOutButton').addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log('Signed out successfully');
    cleanupAuthListener(); // Clean up the listener after sign out
  }).catch((error) => {
    console.error('Sign out error:', error);
  });
});