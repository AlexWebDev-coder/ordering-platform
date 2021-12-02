/** @format */

import React, { useState } from "react";

import { useSelector } from "react-redux";

import { useAction } from "./hooks/useAction";

import { AddUser } from "./components/AddUser";
import { ListUser } from "./components/ListUser";
import { MenuUser } from "./components/MenuUser";

import Container from "@mui/material/Container";

import "./App.css";

const App = () => {
  const [text, setText] = useState("");

  const { user } = useSelector((state) => state.user);
  const { menu } = useSelector((state) => state.menu);

  const { addUser } = useAction();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text) {
      addUser(text);
      setText("");
    }
  };

  return (
    <Container>
      <AddUser
        user={text}
        addUser={addUser}
        handleAdd={handleAdd}
        handleChange={handleChange}
      />

      {user.map((item, index) => (
        <ListUser key={index} name={item} index={index} />
      ))}

      {menu.map((element) => {
        return (
          <MenuUser
            key={element.id}
            id={element.id}
            food={element.food}
            name={element.name}
          />
        );
      })}
    </Container>
  );
};

export default App;
