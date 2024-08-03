import ReactDOM from "react-dom/client";  // Import the ReactDOM library for rendering React components
import App from "./components/App";  // Import the main App component

// Create a root container for the React app by selecting the element with the ID 'root'
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component into the root container
root.render(<App></App>);
