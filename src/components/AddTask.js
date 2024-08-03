// Function to handle adding a new task
const handleTask = (list, setlist, originalUseList) => {
    // Prompt the user for the task title
    const title = prompt("Enter task : ");
    // Prompt the user for the task description
    const description = prompt("Enter description : ");

    // Create a new task object
    let task = {
        "title": title,              // Task title provided by the user
        "description": description,  // Task description provided by the user
        "lastUpdated": String(new Date())  // Timestamp of when the task was created
    }

    // Update the task list state
    setlist([...list, task]);          // Add the new task to the existing list and set the state
    originalUseList([...list, task]);  // Also update the original use list with the new task
}

// React component to add a new task
const AddTask = (props) => {
    return (
        // Button to trigger task addition
        <button 
            className="rounded ml-[45%] bg-white pl-2 pr-2 mt-9" 
            onClick={() => {
                // Call handleTask function when the button is clicked
                handleTask(props.list, props.setlist, props.originalUseList);
            }}
        >
            Add Task
        </button>
    )
}

export default AddTask;
