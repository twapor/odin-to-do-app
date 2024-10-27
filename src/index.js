import { Task } from "./createToDo.js";

const firstTask = new Task("First task", "Example task", "12-10-2024", "Medium", false);

console.log(firstTask);

firstTask.editTaskParameter("title", "Edited first task");

firstTask.editIsDone();

console.log(firstTask);