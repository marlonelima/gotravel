import React from "react";
import { TopTab } from "../../navigation/toptab";
import { Container, Header, HeaderButton } from "./style";

export const Wrapper = () => {
  return (
    <Container>
      <Header>
        <HeaderButton></HeaderButton>
        <HeaderButton></HeaderButton>
      </Header>
      <TopTab />
    </Container>
  );
};
