import React from "react";

import { Container } from "./styles";

import { LocalItem } from "../../../components/LocalItem";

const DATA = [
  {
    name: "cachoeira do Abade",
    city: "Pirenópolis",
    image: "",
    safety: "",
  },
  {
    name: "Cachoeira do Rosário",
    city: "Pirenópolis",
    image: "",
    safety: "",
  },
];

export const RadicalScreen = () => {
  return (
    <Container>
      <LocalItem data={DATA} />
    </Container>
  );
};
