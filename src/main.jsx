import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./pages/UserPage1";
import Page2 from "./pages/usePage2";
import Cart from "./pages/cart.";
import Chekcout from "./pages/Checkout";
import Requirement from "./pages/Requirements"
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import "./scss/pages/UserPage1.scss";
import "./scss/pages/usePage2.scss";
import "./scss/components/cartMessageModel.scss";
import "./scss/pages/Checkout.scss";
import "./scss/pages/gallery.scss";
import "./scss/pages/reviews.scss"
import "./styles/global.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route >
        <Route path="/" element={<Reviews/>} />
      
      </Route>
    </Routes>
  </Router>
);