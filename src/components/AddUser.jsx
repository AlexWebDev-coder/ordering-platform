/** @format */

import React from "react";

import { ListUser } from "./ListUser";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddUser = (props) => {
  const { user, handleChange, handleAdd } = props;

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
