import Heading from "./Heading";           // Import the Heading component
import SearchTask from "./SearchTask";     // Import the SearchTask component
import TaskList from "./TaskList";         // Import the TaskList component
import taskData from "../utils/taskData";  // Import initial task data from a JSON file
import { useState } from "react";          // Import useState hook from React

const App = () => {
    // State to manage the list of tasks
    var [list, uselist] = useState(taskData);    // State for the original task list
    var [templist, usetemplist] = useState(taskData); // State for the filtered task list

    return(
        <div>
            <Heading />  {/* Render the Heading component */}
            <SearchTask 
                list={templist}               // Pass the filtered task list to SearchTask
                setlist={usetemplist}         // Pass the setter function for filtered list to SearchTask
                originalList={list}           // Pass the original task list to SearchTask
                originalUseList={uselist}     // Pass the setter function for the original list to SearchTask
            />
            <TaskList 
                list={templist}               // Pass the filtered task list to TaskList
                uselist={usetemplist}         // Pass the setter function for the filtered list to TaskList
                originalUseList={uselist}     // Pass the setter function for the original list to TaskList
            />
        </div>
    )
}

export default App;  // Export the App component as the default export
