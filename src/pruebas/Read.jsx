import { useEffect, useState } from "react";
import { getItems } from "../app/services/people";
import { Link } from "react-router-dom";
import { Table } from "./readstyles";

const Read = () => {
  const [users, setUsers] = useState();

  const consult = () => {
    getItems().then((res) => {
      setUsers(res);
      console.log(res);
    });
  };

  useEffect(() => {
    consult();
  }, []);

  return (
    <div>
      <h1>Read</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/profile/${user.id}`}>{user.id}</Link>
              </td>
              <td>{user.userName}</td>
              <td>{user.userSurName}</td>
              <td>{user.userDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Read;
