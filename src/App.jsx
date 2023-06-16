import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Componets Import:
import Header from "./components/Header"

// Routes Import:
import Main from "./routes/Main"

// Dynamic Routes Import:
import Product from "./dynamic-routes/Product"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App