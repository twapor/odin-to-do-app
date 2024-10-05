function createToDo (title, description, dueDate, priority) {
    
    let isDone = false;
    const changeDoneStatus = ()=> {
        console.log("Hey I'm started");
        if(isDone == false) {
            isDone = true;
        }

        else {
            isDone = false;
        }
    }

    const getDoneStatus = () => {
        console.log(isDone);
    }

    return {title, description, dueDate, priority, changeDoneStatus, getDoneStatus};
}

export {createToDo};