import { Routes, Route } from "react-router-dom";
//import NavBar from "./components/NavBar";

// 🎯 Page views
//import Home from "./pages/Home";
//import Explore from "./pages/Explore";
//import Calendar from "./pages/Calendar";
//import Phrases from "./pages/Phrases";
//import MBTI from "./pages/MBTI";
//import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <NavBar />
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