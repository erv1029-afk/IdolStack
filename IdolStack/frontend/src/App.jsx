import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/NavBar";

// 🎯 Page views
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Calendar from "./pages/Calendar";
import Phrases from "./pages/Phrases";
import MBTI from "./pages/MBTI";
import Group from "./pages/Group";         // Detail view (e.g., /group/bts)
import GroupList from "./pages/GroupList"; // ✅ New: full list view (/groups)
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
        <Route path="/groups" element={<GroupList />} />     {/* ✅ Static list route */}
        <Route path="/group/:name" element={<Group />} />    {/* ✅ Dynamic detail route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;