import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteItem, getItemById, updateItem } from "../app/services/people";

const Profile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    getItemById(id).then((res) => {
      setUser(res);
      console.log(res);
    });
  }, [id]);

  const handleDelete = async () => {
    await deleteItem(id);
    navigate("/read");
  };

  const handleUpdate = async () => {
    await updateItem(id);
    navigate("/read");
  };

  return (
    <div>
      <h1>Profile</h1>
      <input
        type="text"
        value={user.userName || ""}
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
      />
      <input
        type="text"
        value={user.userSurName || ""}
        onChange={(e) => ({ ...user, userSurName: e.target.value })}
      />
      <input
        value={user.userDate || ""}
        type="date"
        onChange={(e) => ({ ...user, userSurName: e.target.value })}
      />
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Profile;
