import { useState } from "react";

// Function to display the task details in an accordion style
const accordion = (data) => {
    return (
        <>
            {data.description}<br /><br />  {/* Display task description */}
            <span>Last Updated : {data.lastUpdated}</span>  {/* Display last updated timestamp */}
        </>
    );
}

// Function to handle task update
const updateTask = (data, list, setlist, originalUseList) => {
    // Prompt the user for new task title and description
    const title = prompt("Enter task : ");
    const description = prompt("Enter description : ");

    // Loop through the list to find the task to update
    for (let i = 0; i < list.length; i++) {
        if (list[i].lastUpdated === data.lastUpdated) {  // Match task by last updated timestamp
            list[i].title = title;          // Update the task title
            list[i].description = description;  // Update the task description
            list[i].lastUpdated = String(new Date());  // Update the last updated timestamp

            break;  // Exit the loop once the task is found and updated
        }
    }

    // Update the task list state
    setlist([...list]);  // Update the state with the modified list
    originalUseList([...list]);  // Update the original list state with the modified list
}

// Function to handle task deletion
const deleteTask = (data, list, setlist, originalUseList) => {
    // Filter out the task to delete based on the last updated timestamp
    const updatedList = list.filter(task => data.lastUpdated !== task.lastUpdated);

    // Update the task list state
    setlist(updatedList);  // Update the state with the filtered list
    originalUseList(updatedList);  // Update the original list state with the filtered list
}

// React component to display a single task
const Task = (props) => {
    // State to manage accordion (expand/collapse) and check state (completed/not completed)
    const [arrow, setArrow] = useState(true);  // State to manage accordion toggle
    const [check, setCheck] = useState(false);  // State to manage task completion status

    return (
        <>
            <div className="rounded-3xl pl-3 pr-3 flex justify-between text-3xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)] mt-[3%] mb-[3%] w-[700px] bg-[#F7B5CA]">
                {/* Display task title */}
                <p className="text-2xl w-[80%] overflow-auto">{props.data.title}</p>

                {/* Edit task icon */}
                <svg 
                    onClick={() => updateTask(props.data, props.list, props.setlist, props.originalUseList)} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="pt-1 size-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>

                {/* Expand/collapse icon */}
                {arrow ?
                    <svg 
                        onClick={() => setArrow(!arrow)} 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="pt-1 size-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    : 
                    <svg 
                        onClick={() => setArrow(!arrow)} 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="pt-1 size-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                }

                {/* Completion status icon */}
                {check ? 
                    <svg 
                        onClick={() => setCheck(!check)} 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="pt-1 size-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    :
                    <svg 
                        onClick={() => setCheck(!check)} 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="pt-1 size-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
                    </svg>
                }

                {/* Delete task icon */}
                <svg 
                    onClick={() => deleteTask(props.data, props.list, props.setlist, props.originalUseList)}
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="pt-1 size-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>

            </div>

            {/* Display task details based on the accordion state */}
            <p className="w-[500px]">{arrow ? " " : accordion(props.data)}</p>
        </>
    );
}

export default Task;  // Export the Task component as the default export
