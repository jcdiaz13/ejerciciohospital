import { useEffect, useState } from "react";
import {
  deletePerson,
  getPersonById,
  updatePerson,
} from "../../app/services/people";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateAndDelete = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  // const [userName, setUserName] = useState();
  // const [userSurName, setUserSurName] = useState();
  // const [userDate, setUserDate] = useState();

  useEffect(() => {
    getPersonById(id).then((res) => {
      setUser(res);
      console.log(res);

      // const user = res;
      // setUserName(user.userName);
      // setUserSurName(user.userSurName);
      // setUserDate(user.userDate);
    });
  }, [id]);

  const handleDelete = async () => {
    await deletePerson(id);
    navigate("/read");
  };

  const handleUpdate = async () => {
    // await updateItem(id, { userName, userSurName, userDate });
    await updatePerson(id, user);
    navigate("/read");
  };

  return (
    <div>
      <h1>UPDATE AND DELETE</h1>
      <div>
        <Link to={`/`}>Home</Link> <br /> <br />
        <input
          value={user.userName || ""}
          type="text"
          placeholder="Name"
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
          // onChange={(e) => setUserName(e.target.value)}
        />
        {/* onChange={(e) => {...users,userName:e.target.value}} */}
        <input
          value={user.userSurName || ""}
          type="text"
          placeholder="Surname"
          onChange={(e) => setUser({ ...user, userSurName: e.target.value })}
          // onChange={(e) => setUserSurName(e.target.value)}
        />
        <input
          value={user.userDate || ""} //userDate  (el valor de estado correspondiente)
          type="date"
          onChange={(e) => setUser({ ...user, userDate: e.target.value })}
          // onChange={(e) => setUserDate(e.target.value)}
        />
      </div>
      <br />
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateAndDelete;
