import React from "react";
import DrawerNavigator from "./src/navigators/drawerNavigator";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./src/redux/reducers/rootReducer";

export default function App() {
  return (
    <Provider store={createStore(rootReducer)}>
      <DrawerNavigator />
    </Provider>
  );
}
