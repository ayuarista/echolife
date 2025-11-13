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
        <Route path="/details-impact/:id" element={<DetailsImpact />} />
        <Route path="/3r" element={<Page3R />} />
        <Route path="/organic" element={<Organic />} />
        <Route path="/inorganic" element={<Inorganic />} />
        <Route path="/b3" element={<PageB3 />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/article" element={<Article />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;