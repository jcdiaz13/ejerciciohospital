import { useEffect, useState } from "react";
import { deleteItem, getItemById, updateItem } from "../../app/services/people";
import { useNavigate, useParams } from "react-router-dom";

const UpdateAndDelete = () => {
  const [users, setUsers] = useState({});
  // const [userName, setUserName] = useState();
  // const [userSurName, setUserSurName] = useState();
  // const [userDate, setUserDate] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getItemById(id).then((res) => {
      // const user = res;
      // setUserName(user.userName);
      // setUserSurName(user.userSurName);
      // setUserDate(user.userDate);

      setUsers(res);
      console.log(res);
    });
  }, [id]);

  const handleDelete = async () => {
    await deleteItem(id);
    navigate("/read");
  };

  const handleUpdate = async () => {
    // await updateItem(id, { userName, userSurName, userDate });
    await updateItem(id, users);
    navigate("/read");
  };

  return (
    <div>
      <h1>UPDATE AND DELETE</h1>
      <div>
        <input
          value={users.userName}
          type="text"
          placeholder="Name"
          onChange={(e) => setUsers({ ...users, userName: e.target.value })}
          // onChange={(e) => setUserName(e.target.value)}
        />
        {/* onChange={(e) => {...users,userName:e.target.value}} */}
        <input
          value={users.userSurName}
          type="text"
          placeholder="Surname"
          onChange={(e) => setUsers({ ...users, userSurName: e.target.value })}
          // onChange={(e) => setUserSurName(e.target.value)}
        />
        <input
          value={users.userDate} //userDate  (el valor de estado correspondiente)
          type="date"
          onChange={(e) => setUsers({ ...users, userDate: e.target.value })}
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
