import { useState } from "react";
import { useEffect } from "react";
import Tr from "./Tr";
import { createBook, getBooks } from "../../app/services/books";
import { Container } from "./Books.styles";
import { NavLink } from "react-router-dom";

const App = () => {
  const [books, setBooks] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const render = () => {
    getBooks().then((res) => {
      setBooks(res);
      // console.log(res);
    });
  };

  useEffect(() => {
    render();
  }, []);

  const handleClickCreate = () => {
    createBook({ title, price });
    render();
    setTitle("");
    setPrice("");
  };

  return (
    <Container>
      <NavLink to={"/"}>Home</NavLink>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <Tr key={book.id} book={book} render={render} />
          ))}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={price || ""}
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
            <td>
              <button onClick={handleClickCreate}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
export default App;
