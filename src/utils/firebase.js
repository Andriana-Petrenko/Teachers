// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
import teachers from "../teacher.json";
// TODO: Add SDKs for Firebase products that you want to use
// const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyBp-3H8dylqz_87GaxdnFXF3bC39xATA6Q",
  authDomain: "teachers-448e3.firebaseapp.com",
  projectId: "teachers-448e3",
  databaseURL: "https://teachers-448e3-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "teachers-448e3.appspot.com",
  messagingSenderId: "42049598313",
  appId: "1:42049598313:web:56bf023bfeb07156a583f8",
  measurementId: "G-EVB4Q13DMX",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const teachersRef = ref(db, "teachers");


async function importTeachers() {
  try {
    teachers.forEach((teacher) => {
      const newTeacherRef = push(ref(db, "teachers")); // Генерує унікальний id
      set(newTeacherRef, teacher); // Записуємо вчителя
    });

    console.log("Дані успішно завантажено в Firebase!");
  } catch (error) {
    console.error("Помилка імпорту:", error);
  }
}

importTeachers();
