import { NavLink } from "react-router-dom";

const TaskHome = () => {
  return (
    <div>
      <h1>Comprobar/crear usuario</h1>
      <NavLink to={"/"}>Home</NavLink>
      <br />
      <NavLink to={"/taskrequest"}>Tareas</NavLink>
      <br />
      <br />
      <p>Introduce tu nombre. Si no está en la base de datos, se creará.</p>
      <input type="text" /> <br /> <br />
      <button>Submit</button>
    </div>
  );
};

export default TaskHome;
