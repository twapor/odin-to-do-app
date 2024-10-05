import { createToDo } from "./createToDo.js";

const firstTask = createToDo ("First task", "Example task", "12-10-2024", "High");

console.log(firstTask);

firstTask.changeDoneStatus();

console.log(firstTask.getDoneStatus())