import { NavLink } from "react-router-dom";

const TaskRequest = () => {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <br />
      <NavLink to={"/taskhome"}>Comprobar nombre</NavLink>
      <br />
      <br />
      <h1>Lista de Tareas</h1>
      <textarea rows="4" cols="30"></textarea>
    </div>
  );
};

export default TaskRequest;
