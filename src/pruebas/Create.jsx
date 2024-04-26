import { useState } from "react";
import { createPerson } from "../app/services/people";

const Create = () => {
  const [userName, setUsername] = useState();
  const [userSurName, setUserSurname] = useState();
  const [userDate, setUserDate] = useState();

  const handleNewPacient = async () => {
    await createPerson ({userName, userSurName, userDate})
  }


  return (
    <div>
      <h1>Create</h1>
      <input type="text" placeholder="Pacient Name" /> <br /> <br />
      <input type="Pacient Surname" /> <br /> <br />
      <input type="Date" />
    </div>
  );
};

export default Create;
