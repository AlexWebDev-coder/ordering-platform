/** @format */

import React, { useState } from "react";

import { useAction } from "../hooks/useAction";

import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

const MenuUser = (props) => {
  const { id, food, name } = props;

  const [value, setValue] = useState("");

  const { addProductInMenu, deleteItemFood, deleteMenuUser } = useAction();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    if (value) {
      addProductInMenu({ id, food: value });
      setValue("");
    }
  };

  return (
    <>
      <Box className="main">
        <Box className="item">
          <Box>
            #{name.toUpperCase()}
            <IconButton onClick={() => deleteMenuUser(id)}>
              <DeleteOutlineRoundedIcon color="warning" />
            </IconButton>
          </Box>
          <Box>
            <TextField value={value} onChange={handleChange} size="small" />
            <Button onClick={handleAdd} color="warning">
              Add
            </Button>
          </Box>
        </Box>

        <ol>
          {food.map((item, index) => (
            <li key={index}>
              {item}
              <IconButton onClick={() => deleteItemFood(index)}>
                <ClearRoundedIcon color="warning" />
              </IconButton>
            </li>
          ))}
        </ol>
      </Box>
    </>
  );
};

export { MenuUser };
