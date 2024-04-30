import { useEffect, useState } from "react";
import { Container } from "./Read.styles";
import { getPersons } from "../../app/services/people";
import { Link } from "react-router-dom";

const Read = () => {
  const [users, setUsers] = useState();

  const consult = () => {
    getPersons().then((res) => {
      setUsers(res);
      console.log(res);
    });
  };

  useEffect(() => {
    consult();
  }, []);

  return (
    <Container>
      <h1>READ</h1>
      <Link to={`/`}>Home</Link> <br />
      <br />
      <table>
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
      </table>
    </Container>
  );
};

export default Read;
