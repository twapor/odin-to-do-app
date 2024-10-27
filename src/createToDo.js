import { storage } from "./getToDo";

class Task {

    static allTasks = [];

    constructor (title, category, description, dueDate, priority, isDone) {
        this.title = title;
        this.category = category;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = isDone;
        Task.allTasks.push(this);
    }

    static saveToLocalStorage() {
        const tasksJSON = JSON.stringify(Task.allTasks.map(task => ({title: task.title, category: task.category, description: task.description, dueDate: task.dueDate, priority: task.priority, isDone: task.isDone})));
        localStorage.setItem("tasks", tasksJSON);
    }

    static loadFromLocalStorage() {
        const tasksJSON = localStorage.getItem("tasks");
        if(tasksJSON) {
            const tasksArray = JSON.parse(tasksJSON);
            Task.allTasks = tasksArray.map(taskData => new Task(taskData.title, taskData.category, taskData.description, taskData.dueDate, taskData.priority, taskData.isDone));
        }
    }

    editIsDone () {
        this.isDone = !this.isDone;
    }

    editTaskParameter (parameter, value) {
        this[parameter] = value;
    }
}

export {Task};