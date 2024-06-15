import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import AllProjects from "./pages/AllProjects";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
