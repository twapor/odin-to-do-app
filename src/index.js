import { createToDo } from "./createToDo.js";

const firstTask = createToDo ("First task", "Example task", "12-10-2024");

console.log(firstTask.getTitle());
console.log(firstTask.getDescription());
console.log(firstTask.getDueDate());
console.log(firstTask.getPriority());
console.log(firstTask.getDoneStatus());

firstTask.editTitle("Edited first task");
firstTask.editDescription("Edited example task");
firstTask.editDueDate("00-00-0000");
firstTask.editPriority("High");
firstTask.editDoneStatus();

console.log(firstTask.getTitle());
console.log(firstTask.getDescription());
console.log(firstTask.getDueDate());
console.log(firstTask.getPriority());
console.log(firstTask.getDoneStatus());