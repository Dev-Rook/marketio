import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Componets Import:
import Header from "./components/Header"

// Routes Import:
import Main from "./routes/Main"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  )
}

export default App