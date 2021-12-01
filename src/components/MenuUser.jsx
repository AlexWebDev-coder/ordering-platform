/** @format */

import React, { useState } from "react";

import { useSelector } from "react-redux";
import { useAction } from "../hooks/useAction";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const MenuUser = () => {
  const [value, setValue] = useState("");
  const { menu } = useSelector((state) => state.menu);
  const { addProductInMenu } = useAction();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    addProductInMenu(value);
    setValue("");
  };

  return (
    <>
      {menu &&
        menu.map((item) => (
          <div className="main" key={item.id}>
            <div className="item">#{item.value}:</div>
            <TextField value={value} onChange={handleChange} size="small" />
            <Button onClick={handleAdd}>Add</Button>
          </div>
        ))}
    </>
  );
};

export { MenuUser };
