import { StatusBar } from "expo-status-bar";
import React from "react";
import { MainNavigation } from "./src/navigation/main";

export default function App() {
  return (
    <>
      <StatusBar translucent={false} style="light" />
      <MainNavigation />
    </>
  );
}
