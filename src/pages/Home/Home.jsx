import { NavLink } from "react-router-dom";

const Home = () => (
  <div>
    <h1>HOME</h1>
    <ul>
      <li>
        <NavLink to="/create">Create Pacient</NavLink>
      </li>
      <li>
        <NavLink to="/read">Read Pacients</NavLink>
      </li>
      <li>
        <NavLink to="/books">Books</NavLink>
      </li>
      <li>
        <NavLink to="/taskhome">Tasks</NavLink>
      </li>
      <li>
        <NavLink to="/rick&morty">Rick & Morty</NavLink>
      </li>
    </ul>
  </div>
);

export default Home;
