/** @format */

import React from "react";

import { AddUser } from "./components/AddUser";
import { ListUser } from "./components/ListUser";
import { MenuUser } from "./components/MenuUser";

import Container from "@mui/material/Container";

import "./App.css";

const App = () => {
  return (
    <Container>
      <AddUser />
      <ListUser />
      <MenuUser />
    </Container>
  );
};

export default App;
