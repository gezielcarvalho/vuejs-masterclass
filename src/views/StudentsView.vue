<!-- src/views/StudentsView.vue 
 Factory Pattern: The StudentFactory provides a clear separation of concerns by
 handling the logic for creating different types of students, making the system 
 easy to extend.
-->
<script setup lang="ts">
  import { ref } from "vue";
  import { useStudentsStore } from "@/stores/students";

  // Pinia store for students
  const studentsStore = useStudentsStore();

  // Form inputs for adding a new student
  const studentName = ref("");
  const studentType = ref("Undergraduate");

  function addStudent() {
    if (studentName.value) {
      studentsStore.addStudent(studentType.value, studentName.value);
      studentName.value = ""; // Reset form input after adding
    }
  }
</script>

<template>
  <div class="students">
    <h1>Student Management</h1>

    <form @submit.prevent="addStudent">
      <label for="studentName">Name:</label>
      <input v-model="studentName" type="text" placeholder="Enter student name" required />

      <label for="studentType">Type:</label>
      <select v-model="studentType">
        <option>Undergraduate</option>
        <option>Graduate</option>
        <option>PhD</option>
      </select>

      <button type="submit">Add Student</button>
    </form>

    <ul>
      <li v-for="student in studentsStore.students" :key="student.name">
        <h2>{{ student.name }} ({{ student.level }})</h2>
        <p>{{ student.description() }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .students {
    padding: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  label {
    margin-bottom: 0.5rem;
  }

  input,
  select {
    margin-bottom: 1rem;
    padding: 0.5rem;
  }

  button {
    padding: 0.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  li h2 {
    margin: 0 0 0.5rem;
  }
</style>
