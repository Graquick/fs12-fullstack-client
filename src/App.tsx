/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Layout from "components/Layout";
import useProducts from "hooks/useProducts";

const App = () => {
  const data = useProducts();
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
