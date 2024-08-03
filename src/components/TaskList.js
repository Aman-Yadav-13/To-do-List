import Task from "./Task";  // Import the Task component
import AddTask from "./AddTask";  // Import the AddTask component

// TaskList component to render a list of tasks and an AddTask button
const TaskList = (props) => {
    return (
        <>
            {/* Render each task using the Task component */}
            {props.list.map(data => 
                <Task 
                    data={data}  // Pass the task data as a prop
                    key={data.lastUpdated}  // Use lastUpdated as a unique key for each task
                    list={props.list}  // Pass the current list of tasks
                    setlist={props.uselist}  // Pass the function to update the task list
                    originalUseList={props.originalUseList}  // Pass the function to update the original list
                />
            )}

            {/* Render the AddTask button */}
            <AddTask 
                list={props.list}  // Pass the current list of tasks
                setlist={props.uselist}  // Pass the function to update the task list
                originalUseList={props.originalUseList}  // Pass the function to update the original list
            />
        </>
    );
}

export default TaskList;  // Export the TaskList component as the default export
