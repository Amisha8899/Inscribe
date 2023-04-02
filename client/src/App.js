import TextEditor from "./textEditor"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"

function App() {
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={ <Navigate to={`/documents/${uuidV4()}`} replace /> }
      />
        <Route path="/documents/:id" Component={TextEditor} />
      </Routes>
    </Router>
  )
}

export default App