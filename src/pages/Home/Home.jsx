import { NavLink } from "react-router-dom";

const Home = () => (
  <div>
    <h1>HOME</h1>
    <ul>
      <li>
        <NavLink to="/create">Create</NavLink>
      </li>
      <li>
        <NavLink to="/read">Read</NavLink>
      </li>
    </ul>
  </div>
);

export default Home;
