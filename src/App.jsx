import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/frontend_architect" element={<Home />}></Route>
        <Route
          path="/frontend_architect/services"
          element={<Services />}
        ></Route>
        <Route
          path="/frontend_architect/portfolio"
          element={<Portfolio />}
        ></Route>
        <Route path="/frontend_architect/blog" element={<Blog />}></Route>
        <Route path="/frontend_architect/shop" element={<Shop />}></Route>
        <Route path="/frontend_architect/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
