import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/NavBar";

// 🎯 Page views
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Calendar from "./pages/Calendar";
import Phrases from "./pages/Phrases";
import MBTI from "./pages/MBTI";
import Group from "./pages/Group";         // Dynamic detail view (e.g., /group/bts)
import GroupList from "./pages/GroupList"; // Static list view (/groups)
import Lightstick from "./pages/Lightstick"; // 🌟 New: "Create Your Own Lightstick"
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
        {/* Core pages */}
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/phrases" element={<Phrases />} />
        <Route path="/mbti" element={<MBTI />} />

        {/* Groups */}
        <Route path="/groups" element={<GroupList />} />
        <Route path="/group/:name" element={<Group />} />

        {/* Coming soon feature */}
        <Route path="/lightstick" element={<Lightstick />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;