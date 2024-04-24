import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateAndDelete from "../pages/UpdateAndDelete/UpdateAndDelete";
import Create from "../pages/Create/Create";
import Read from "../pages/Read/Read";
import Home from "../pages/Home/Home";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/read" element={<Read />} />
      <Route path="/create" element={<Create />} />
      <Route path="/updateanddelete" element={<UpdateAndDelete />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
