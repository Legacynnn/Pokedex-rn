import React from "react";
import { NativeBaseProvider, Box, StatusBar, Text } from "native-base";
import { THEME } from "./src/styles/global";
import { Welcome } from "./src/screens/Welcome";
import {Home} from "./src/screens/Home";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME} >
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Home/>
    </NativeBaseProvider>
  );
}
