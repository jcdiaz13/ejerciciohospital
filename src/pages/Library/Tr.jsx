import { useState } from "react";
import { deleteItem, updateItem } from "../../app/services/books";

const Tr = ({ book, render }) => {
  const [title, setTitle] = useState(book.title);
  const [price, setPrice] = useState(book.price);

  const handleClickDelete = () => {
    deleteItem(book.id);
    render();
  };

  const handleClickUpdate = () => {
    updateItem(book.id, { title, price });
  };
  return (
    <tr>
      <td>{book.id}</td>
      <td>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </td>
      <td>
        <button onClick={handleClickDelete}>Delete</button>
        <button onClick={handleClickUpdate}>Update</button>
      </td>
    </tr>
  );
};

export default Tr;
