<template>
  <!-- just centers the box -->
  <div class="flex items-center justify-center">
    <div class="flex justify-center w-2/3 mt-4 border-2 border-black">
      <div class="flex flex-col w-2/3 gap-4 mt-5 bg-red-400">
        <form @submit.prevent="addTodo">
          <div class="flex flex-col gap-4 bg-green-600">
            <p class="text-2xl font-bold text-center">BADASS TODO</p>
            <div class="flex justify-between">
              <input type="text" v-model="newTodo" />
              <button
                :disabled="!newTodo"
                class="px-4 py-2 rounded-md bg-sky-600 text-blue-50"
              >
                Add
              </button>
            </div>
          </div>
        </form>
        <!-- card -->
        <template v-for="todo in todos">
          <Card
            @xClick="deleteTodo"
            @checkClick="toggleDone"
            :todo="todo"
          ></Card>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "./components/Card.vue";
import { ref, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

const todosCollectionRef = collection(db, "todos");
const todosCollectionQuery = query(todosCollectionRef, orderBy("date", "desc"));

onMounted(async () => {
  //fb means firebase, this function loads the data from fb and updates the data on vue if it gets updated in firebase
  // onSnapshot(todosCollectionRef, (querySnapshot) => {
  onSnapshot(todosCollectionQuery, (querySnapshot) => {
    const fbTodos = [];
    querySnapshot.forEach((doc) => {
      const tempTodo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done,
      };
      fbTodos.push(tempTodo);
    });
    todos.value = fbTodos;
  });
});

const todos = ref([]);
// const todos = ref([
//   {
//     id: "id1",
//     content: "local todo1",
//     done: false,
//   },
//   {
//     id: "id2",
//     content: "local todo2",
//     done: true,
//   },
//   {
//     id: "id3",
//     content: "local todo3",
//     done: false,
//   },
// ]);
const newTodo = ref("");
const addTodo = async () => {
  addDoc(collection(db, "todos"), {
    content: newTodo.value,
    done: false,
    date: Date.now(),
  });
  // const todo = {
  //   id: uuidv4(),
  //   content: newTodo.value,
  //   done: false,
  // };
  // todos.value.push(todo);
  newTodo.value = "";
};
const deleteTodo = (id) => {
  // todos.value = todos.value.filter((todo) => todo.id !== id);
  deleteDoc(doc(collection(db, "todos"), id));
};
const toggleDone = (id) => {
  const index = todos.value.findIndex((todo) => todo.id === id);
  // todos.value[index].done = !todos.value[index].done;

  updateDoc(doc(collection(db, "todos"), id), {
    done: !todos.value[index].done,
  });
};
</script>

<style lang="scss" scoped></style>
