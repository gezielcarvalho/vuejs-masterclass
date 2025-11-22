// src/stores/students.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import { StudentFactory } from "@/services/studentFactory";
export const useStudentsStore = defineStore("students", () => {
    const students = ref([]);
    function addStudent(type, name) {
        const student = StudentFactory.createStudent(type, name);
        students.value.push(student);
    }
    return { students, addStudent };
});
