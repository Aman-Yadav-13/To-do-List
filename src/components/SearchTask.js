// Function to handle searching tasks
const search = (event, list, setlist, originalList, originalUseList) => {
    // Get the search text from the input field and convert it to lowercase
    const text = event.target.value.toLowerCase();

    // Filter the original list based on whether the task title or description includes the search text
    const updatedList = originalList.filter((task) => {
        const title = task.title.toLowerCase();            // Convert task title to lowercase
        const description = task.description.toLowerCase();  // Convert task description to lowercase

        // Check if the title or description includes the search text
        return title.includes(text) || description.includes(text);
    });

    // Update the filtered list state
    setlist(updatedList);   // Update the list shown to the user
}

// React component for the search input
const SearchTask = (props) => {
    return (
        // Render an input field for searching tasks
        <input 
            className="rounded w-[600px] ml-[50px] text-center mb-[3%]"  // Apply styling to the input field
            placeholder="Search Tasks"  // Placeholder text for the input field
            type="text"  // Input type set to text
            onChange={(event) => 
                search(event, props.list, props.setlist, props.originalList, props.originalUseList)
            }  // Call search function on input change
        />
    );
}

export default SearchTask;  // Export the SearchTask component as the default export
