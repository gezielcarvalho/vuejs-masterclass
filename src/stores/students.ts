// src/stores/students.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import { StudentFactory } from "@/services/studentFactory";
import type { Student } from "@/services/studentTypes";

export const useStudentsStore = defineStore("students", () => {
  const students = ref<Student[]>([]);

  function addStudent(type: string, name: string) {
    const student = StudentFactory.createStudent(type, name);
    students.value.push(student);
  }

  return { students, addStudent };
});
