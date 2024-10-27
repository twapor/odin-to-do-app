class Task {
    constructor (title, description, dueDate, priority, isDone) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = isDone;
    }

    editIsDone () {
        this.isDone = !this.isDone;
    }

    editTaskParameter (parameter, value) {
        this[parameter] = value;
    }
}

export {Task};