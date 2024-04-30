import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateAndDelete from "../pages/UpdateAndDelete/UpdateAndDelete";
import Create from "../pages/Create/Create";
import Read from "../pages/Read/Read";
import Home from "../pages/Home/Home";
import Library from "../pages/Library/Library";
import TaskHome from "../pages/TaskHome/TaskHome";
import TaskRequest from "../pages/TaskRequest/TaskRequest";
import RickMorty from "../pages/RickMortyHome/RickMorty";
import RickMortyProfile from "../pages/RickMortyProfile/RickMortyProfile";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/read" element={<Read />} />
      <Route path="/create" element={<Create />} />
      <Route path="/profile/:id" element={<UpdateAndDelete />} />
      <Route path="/books" element={<Library />} />
      <Route path="/taskhome" element={<TaskHome />} />
      <Route path="/taskrequest" element={<TaskRequest />} />
      <Route path="/Rick&Morty" element={<RickMorty />} />
      <Route path="/Rick&MortyProfile/:id" element={<RickMortyProfile />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
