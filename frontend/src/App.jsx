import { Routes, Route, BrowserRouter } from 'react-router-dom'
import PrivateRouteApps from './components/PrivateRouteApps'
import PrivateRoute from './components/PrivateRoute'

/* Web Pages */
import RootLayout from './pages/layouts/RootLayout';
import SiteLayout from './pages/layouts/SiteLayout';
import AppLayout from "./pages/layouts/AppLayout";
import IndexPage from "./pages/IndexPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EditAccount from"./pages/EditAccount";
import CalendarApp from "./pages/app/CalendarApp";
import ColorThemePalette from "./pages/app/ColorThemePalette";
import Home from "./pages/app/Home";
import Notes from "./pages/app/Notes";
import Todo from "./pages/app/Todo";
import DisplayFlashcards from "./pages/app/DisplayFlashcards";
import FlashcardManagement from "./pages/app/FlashcardManagment";

function App() {
  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <RootLayout/> } >
          <Route path="/" element={ <SiteLayout/> } >
            <Route path="/" element={ <IndexPage/> } />
            <Route path="login" element={ <Login/> } />
            <Route path="signup" element={ <Signup/> } />
            <Route path="edit" element={ <PrivateRoute> <EditAccount /> </PrivateRoute>} />
          </Route>
          <Route path="app" element={ <AppLayout/> }>
            <Route path="flashcards" element={ <DisplayFlashcards/> } />
            <Route path="flashcards/manage" element={ <FlashcardManagement/> } />
            <Route path="calendar" element={ <CalendarApp/> } />
            <Route path="colorthemepalette" element={  <ColorThemePalette /> } />
            <Route path="home" element={ <Home/> } />
            <Route path="notes" element={ <Notes/> } />
            <Route path="notes/:noteId" element={ <Notes/> } />
            <Route path="todo" element={ <Todo/> } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
