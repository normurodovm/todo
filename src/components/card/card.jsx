import React from "react";
import { Form } from "../form/form";

export const Card = ({ name, id, setData }) => {
  const [show, setShow] = React.useState(false);
  const deleteItem = () => {
    setData((data) => {
      return data.filter((item) => item.id != id);
    });
  };
  const editItem = () => {
    setShow(!show);
  };
  const editedItem = (newValue) => {
    setData((data) => {
      return data.map((item) =>
        item.id === id ? { name: newValue, id } : item
      );
    });

    setShow(false);
  };
  return (
    <div className="p-4 border rounded-md shadow-md mt-4">
      {show ? (
        <div className="my-8">
          <Form editedItem={editedItem} defaultValue={name} />
        </div>
      ) : (
        <h1 className="text-xl font-semibold mb-4">{name}</h1>
      )}
      <button className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-700" onClick={deleteItem}>delete</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={editItem}>edit</button>
    </div>
  );
};