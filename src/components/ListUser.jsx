/** @format */

import React from "react";

import { useAction } from "../hooks/useAction";

import CheckIcon from "@mui/icons-material/Check";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const ListUser = (props) => {
  const { name, index } = props;

  const { deleteUser, addMenuForUser } = useAction();

  const handleDelete = () => {
    deleteUser(index);
    addMenuForUser({
      id: Date.now(),
      name,
      food: [],
    });
  };

  return (
    <Box className="container">
      <Box className="checkIcon">
        #{name}
        <Box className="icon-item">
          <IconButton onClick={handleDelete}>
            <CheckIcon color="success" />
          </IconButton>
          <IconButton onClick={() => deleteUser(index)}>
            <ClearRoundedIcon color="error" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export { ListUser };
