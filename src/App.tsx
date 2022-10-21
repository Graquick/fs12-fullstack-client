import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Layout from "components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<Home/>} />

          {/* protected routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
