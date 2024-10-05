function createToDo (title, description, dueDate, priority = "Medium") {
    
    let taskTitle = title;
    let taskDescription = description;
    let taskDueDate = dueDate;
    let taskPriority = priority;
    let isDone = false;
    
    //Functions to manipulate the task
    const editTitle = (newTitle) => {
        taskTitle = newTitle;
    }

    const editDescription = (newDescription) => {
        taskDescription = newDescription;
    }

    const editDueDate = (newDueDate) => {
        taskDueDate = newDueDate;
    }

    const editPriority = (newPriority) => {
        taskPriority = newPriority;
    }

    const editDoneStatus = ()=> {
        if(isDone == false) {
            isDone = true;
        }

        else {
            isDone = false;
        }
    }

    //Functions to get the parameters of the task
    const getTitle = () => {
        return taskTitle;
    }

    const getDescription = () => {
        return taskDescription;
    }

    const getDueDate = () => {
        return taskDueDate;
    }

    const getPriority = () => {
        return taskPriority;
    }

    const getDoneStatus = () => {
        return isDone;
    }



    return {editTitle, getTitle, editDescription, getDescription, editDueDate, getDueDate, editPriority, getPriority, editDoneStatus, getDoneStatus};
}

export {createToDo};