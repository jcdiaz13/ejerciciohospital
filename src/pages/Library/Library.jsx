import { Container } from "./Books.styles";
import { createBook, getItems } from "../../app/services/books";
import { useEffect, useState } from "react";

const Library = () => {
  const [books, setBooks] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    render();
  }, []);

  const render = () => {
    getItems().then((res) => {
      setBooks(res);
      console.log(res);
    });
  };
  const handleNewBook = async () => {
    createBook({ title, price });
    render();
  };
  return (
    <Container>
      <h1>BOOKS</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td>
                <button>Delete</button>
                <button>Update</button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
            <td>
              <button onClick={handleNewBook}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default Library;
