import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/NavBar";

// 🎯 Page views
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Calendar from "./pages/Calendar";
import Phrases from "./pages/Phrases";
import MBTI from "./pages/MBTI";
import NotFound from "./pages/NotFound";

// 🧹 Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/phrases" element={<Phrases />} />
        <Route path="/mbti" element={<MBTI />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;