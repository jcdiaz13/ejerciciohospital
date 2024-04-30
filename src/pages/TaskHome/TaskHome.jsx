import { NavLink } from "react-router-dom";
// import { useState } from "react";
import { access } from "../../app/services/people";
import { useUserContext } from "../../app/providers/TaskProvider";

const TaskHome = () => {
  const [user, setUser] = useUserContext();
  // const [user, setUser] = useState();

  const handleClick = () => {
    access(user).then(() => {
      console.log(user);
    });
  };

  return (
    <div>
      <h1>Comprobar/crear usuario</h1>
      <NavLink to={"/"}>Home</NavLink>
      <br />
      <NavLink to={"/taskrequest"}>Tareas</NavLink>
      <br />
      <br />
      <p>Introduce tu nombre. Si no está en la base de datos, se creará.</p>
      <input
        type="text"
        value={user || ""}
        onChange={(e) => setUser(e.target.value)}
      />
      <br /> <br />
      <p>{user}</p>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default TaskHome;
