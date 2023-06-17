import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componets Import:
import Header from "./components/Header";

// Routes Import:
import Index from "./routes/Index";
import Profile from "./routes/Profile";
import Cart from "./routes/Cart";

// Dynamic Routes Import:
import Product from "./dynamic-routes/Product";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
