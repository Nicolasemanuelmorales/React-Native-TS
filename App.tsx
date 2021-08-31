import React from "react";
import DrawerNavigator from "./src/navigators/drawerNavigator";
import { configureFontAwesomePro } from "react-native-fontawesome-pro";

import { Provider } from "react-redux";
import store from "./src/redux/store/store";

configureFontAwesomePro();

export default function App() {
  return (
    <Provider store={store}>
      <DrawerNavigator />
    </Provider>
  );
}
