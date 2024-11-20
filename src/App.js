import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/templates/Header.jsx";
import Home from "./pages/Home.jsx";
import Page3R from "./pages/Page3R.jsx";
import Footer from "./components/templates/Footer.jsx";
import DetailsImpact from "./pages/DetailsImpact.jsx";
import Article from "./pages/Article.jsx";
import ScrollToTop from "./components/molecules/ScrollToTop.jsx";
import Organic from "./pages/Organic.jsx";
import Inorganic from "./pages/Inorganic.jsx";
import PageB3 from "./pages/PageB3.jsx";
import Tracker from "./pages/Tracker.jsx";
import Quiz from "./pages/Quiz.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailsImpact/:id" element={<DetailsImpact />} />
        <Route path="/3R" element={<Page3R />} />
        <Route path="/Organic" element={<Organic />} />
        <Route path="/Inorganic" element={<Inorganic />} />
        <Route path="/B3" element={<PageB3 />} />
        <Route path="/Tracker" element={<Tracker />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Article" element={<Article />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;