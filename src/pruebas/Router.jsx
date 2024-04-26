import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Read from "./Read";
import Create from "./Create";
import Profile from "./Profile";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/read" element={<Read />} />
      <Route path="/create" element={<Create />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
