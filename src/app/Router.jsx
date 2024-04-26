import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateAndDelete from "../pages/UpdateAndDelete/UpdateAndDelete";
import Create from "../pages/Create/Create";
import Read from "../pages/Read/Read";
import Home from "../pages/Home/Home";
import Library from "../pages/Library/Library";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/read" element={<Read />} />
      <Route path="/create" element={<Create />} />
      <Route path="/profile/:id" element={<UpdateAndDelete />} />
      <Route path="/books" element={<Library />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
