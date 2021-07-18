import { StatusBar } from "expo-status-bar";
import React from "react";
import { Wrapper } from "./src/domain/Wrapper";

export default function App() {
  return (
    <>
      <StatusBar translucent={false} style="light" />
      <Wrapper />
    </>
  );
}
