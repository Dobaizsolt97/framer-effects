import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import FirstScreen from "./screens/FirstScreen";
import SecondScreen from "./screens/SecondScreen";
import DefaultScreen from "./screens/DefaultScreen";
import ThirdScreen from "./screens/ThirdScreen";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/third">
          <ThirdScreen />
        </Route>
        <Route exact path="/second">
          <SecondScreen />
        </Route>
        <Route exact path="/first">
          <FirstScreen />
        </Route>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="*">
          <DefaultScreen />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
