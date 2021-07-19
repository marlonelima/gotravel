import React from "react";

import { Container } from "./styles";

import { LocalList } from "../../../components/LocalList";

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
      <LocalList data={DATA} />
    </Container>
  );
};
