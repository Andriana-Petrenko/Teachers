import { createAsyncThunk } from "@reduxjs/toolkit";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";


// Реєстрація користувача
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
       
      // Додаємо користувача в Firestore
      return { user: { email, name }, token: user.accessToken };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Логін користувача
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
       
console.log( { user: { email }, token: user.accessToken });
      return { user: email, token: user.accessToken };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Вихід з облікового запису
export const logoutUser = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  try {
    await signOut(auth);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Отримання даних поточного користувача
// export const fetchUserData = createAsyncThunk(
//   "auth/fetchUser",
//   async (_, { rejectWithValue }) => {
//     return new Promise((resolve, reject) => {
//       onAuthStateChanged(auth, async (user) => {
//         if (user) {
//           const userDoc = await getDoc(doc(db, "users", user.uid));
//           resolve(userDoc.exists() ? userDoc.data() : null);
//         } else {
//           reject(rejectWithValue("User not logged in"));
//         }
//       });
//     });
//   }
// );