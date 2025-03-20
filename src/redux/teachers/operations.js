import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get, query, orderByKey, startAfter, limitToFirst, getDatabase} from "firebase/database";
import { db } from "../../utils/firebase";

// export const fetchTeachers = createAsyncThunk(
//   "teachers/fetchTeachers",
//   async ({ lastKey = null }, { rejectWithValue }) => {
//     try {
//     //   const db = getDatabase();
//       let teachersQuery;

//       if (lastKey) {
//         // Якщо є `lastKey`, починаємо після нього
//         teachersQuery = query(ref(db, "teachers"), orderByKey(), startAfter(lastKey), limitToFirst(5));
//       } else {
//         // Якщо `lastKey` немає, отримуємо перші 5 записів
//         teachersQuery = query(ref(db, "teachers"), orderByKey(), limitToFirst(5));
//       }

//       const snapshot = await get(teachersQuery);

//       if (!snapshot.exists()) {
//         return { teachers: [], lastKey: null };
//       }

//       const teachersData = snapshot.val();
//       const teachersArray = Object.entries(teachersData).map(([key, value]) => ({
//         id: key,
//         ...value,
//       }));

//       // Отримуємо останній ключ для наступного запиту
//       const nextLastKey = teachersArray.length === 5 ? teachersArray[teachersArray.length - 1].id : null;
// console.log(teachersArray);

//       return { teachers: teachersArray, lastKey: nextLastKey };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );


export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (_, { rejectWithValue }) => {
    try {
      const dbRef = ref(db, "teachers"); // Шлях до колекції "teachers"
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const teachersData = snapshot.val();
        const teachersArray = Object.entries(teachersData).map(([id, value]) => ({
          id,
          ...value,
        }));
        return teachersArray;
      } else {
        return [];
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
