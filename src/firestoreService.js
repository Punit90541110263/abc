import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

const tasksCollection = collection(db, "tasks");

// Add a new task
export const addTask = async (taskName) => {
  try {
    const docRef = await addDoc(tasksCollection, {
      name: taskName,
      completed: false,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

// Get all tasks
export const getTasks = async () => {
  try {
    const snapshot = await getDocs(tasksCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

// Update a task
export const updateTask = async (taskId, updatedFields) => {
  try {
    const taskDoc = doc(db, "tasks", taskId);
    await updateDoc(taskDoc, updatedFields);
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

// Delete a task
export const deleteTask = async (taskId) => {
  try {
    const taskDoc = doc(db, "tasks", taskId);
    await deleteDoc(taskDoc);
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
