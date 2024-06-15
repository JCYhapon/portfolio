import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
