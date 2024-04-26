import { useState } from "react";
import { createPerson } from "../app/services/people";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [userName, setUserName] = useState();
  const [userSurName, setUserSurname] = useState();
  const [userDate, setUserDate] = useState();

  const navigate = useNavigate();

  const handleNewPacient = async () => {
    await createPerson({ userName, userSurName, userDate });
    // setUserName("");
    // setUserSurname("");  para limpiar los inputs ( es necesario añadir un value a la etiqueta input)
    // setUserDate("");
    navigate("/");
  };

  return (
    <div>
      <h1>Create</h1>
      <input
        type="text"
        placeholder="Pacient Name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="Pacient Surname"
        onChange={(e) => setUserSurname(e.target.value)}
      />
      <br /> <br />
      <input
        type="date"
        onChange={(e) => setUserDate(e.target.value)}
      /> <br /> <br />
      <button onClick={handleNewPacient}>Create</button>
    </div>
  );
};

export default Create;
