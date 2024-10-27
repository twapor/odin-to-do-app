import { Task } from "./createToDo.js";
import { storage } from "./getToDo.js";
import { saveToLocalStorage } from "./setToDo.js";

console.log("Loaded from storage");
console.log(storage);