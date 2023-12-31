import ReactDOM from 'react-dom/client'
import "react-big-calendar/lib/css/react-big-calendar.css";

/* Components */
import App from './App.jsx'

/* Styles */
import './style/index.css'
import './style/sidebar.css'
import './style/Flashcards.css'
import './style/App.css'
import './style/TodoApp.css'
import './style/Login.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)