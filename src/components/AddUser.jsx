/** @format */

import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useAction } from "../hooks/useAction";

const AddUser = () => {
  const [user, setUser] = useState("");

  const { addUser } = useAction();

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleAdd = () => {
    const newUser = {
      id: Date.now(),
      value: user,
    };
    if (user !== "") {
      addUser(newUser);
      setUser("");
    }
  };

  return (
    <>
      <TextField
        value={user}
        onChange={handleChange}
        size="small"
        placeholder="Add user"
      />
      <Button
        onClick={handleAdd}
        color="warning"
        sx={{ ml: 1 }}
        variant="outlined"
      >
        Add user
      </Button>
    </>
  );
};

export { AddUser };
