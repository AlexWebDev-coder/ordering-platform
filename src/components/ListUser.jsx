/** @format */

import React from "react";

import { useSelector } from "react-redux";

import { useAction } from "../hooks/useAction";

import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";

const ListUser = () => {
  const { user } = useSelector((state) => state.user);

  const { deleteUser, addMenuForUser } = useAction();

  const handleDelete = (el) => {
    deleteUser(el.id);
    addMenuForUser({
      id: el.id,
      value: el.value,
      food: [],
    });
  };

  return (
    <>
      {user.map((item) => (
        <div key={item.id} className="container">
          <div className="checkIcon">
            #{item.value}
            <IconButton onClick={() => handleDelete(item)}>
              <CheckIcon color="success" />
            </IconButton>
          </div>
        </div>
      ))}
    </>
  );
};

export { ListUser };
