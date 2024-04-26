import { useState } from "react";
import { createPerson } from "../../app/services/people";
import { Link } from "react-router-dom";
const Create = () => {
  const [userName, setUsername] = useState();
  const [userSurName, setUserSurname] = useState();
  const [userDate, setUserDate] = useState();

  const handleAddPerons = async () => {
    await createPerson({ userName, userSurName, userDate });
  };
  return (
    <div>
      <h1>CREATE</h1>
      <Link to={`/`}>Home</Link> <br /> <br />
      <input
        type="text"
        placeholder="Pacient Name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="Pacient Surname"
        onChange={(e) => setUserSurname(e.target.value)}
      />
      <br /> <br />
      <input type="date" onChange={(e) => setUserDate(e.target.value)} />
      <br /> <br />
      <button onClick={handleAddPerons}>Create</button>
    </div>
  );
};

export default Create;
