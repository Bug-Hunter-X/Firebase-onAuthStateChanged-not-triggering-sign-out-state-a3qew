# Firebase onAuthStateChanged Issue

This repository demonstrates a problem with the Firebase `onAuthStateChanged` listener. The listener does not reliably trigger the sign-out state (`else` block) when a user logs out, potentially leading to unexpected behavior in your application.

## Problem Description

The provided code uses `onAuthStateChanged` to detect user sign-in/sign-out events. However, after signing out, the `else` block (for the signed-out state) is not executed, and the code remains in the signed-in state.  Attempts to unsubscribe using the returned unsubscribe function also appear ineffective.

## Solution

The solution provided addresses this issue by ensuring proper cleanup and handling of the listener.

## Reproduction

1.  Clone this repository.
2.  Ensure you have the Firebase JavaScript SDK installed (`npm install firebase`).
3.  Configure your Firebase project settings in the provided JavaScript file.
4.  Run the application and sign in with a valid user account.
5.  Sign out. Observe that the expected 'User signed out' message does not appear.
6.  Review the solution for the fix.