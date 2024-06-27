import React from "react";

export const Form = ({ setData, defaultValue, editedItem }) => {
  const [userName, setUserName] = React.useState(
    defaultValue ? defaultValue : ""
  );
  const submit = (e) => {
    e.preventDefault();
    if (defaultValue) {
      editedItem(userName);

      return;
    }
    setData((state) => {
      return [...state, { name: userName, id: Date.now() }];
    });
    setUserName("");
  };
  return (
    <form onSubmit={submit}>
      <input
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        type="text"
        name="userName"
      />
      <button type="submit">{defaultValue ? "edit" : "send"}</button>
    </form>
  );
};
