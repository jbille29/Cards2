import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Landing from "./pages/Landing"
import ProductDetail from "./pages/ProductDetail"
import Sign from "./pages/Sign"
import Cart from "./pages/Cart"
import Success from "./pages/Success"

const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="details/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="sign/:id" element={<Sign />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
