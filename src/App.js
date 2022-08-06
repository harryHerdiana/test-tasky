import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProjectCreation from './pages/ProjectCreation'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Change this to a private route once authentication has been implemented */}
          <Route path="/create-project" element={<ProjectCreation />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
