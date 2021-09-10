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

{
  /*
 
 ║                                                               ║
 ║    Podrá probar la aplicación haciendo click en el boton      ║
 ║    "Tap to play" del lado derecho de la pantalla.             ║
 ║                                                               ║
 ║    Por default esta seleccionado la opcion de "Android".      ║
 ║                                                               ║
 ║    Puede selecciona la opcion "ios" pudiendo asi probar la    ║
 ║    aplicación en un "Iphone"                                  ║
 ║                                                               ║
 ║    Para probar la opcion "Web" es recomendable entrar al      ║
 ║    al link de abajo, ya que fue hecho especialmente para      ║
 ║    ese entorno.                                               ║     
 ║                                                               ║
 ║    https://nicolasemanuelmorales.github.io/ReactJSWithDogs    ║
 ║                                                               ║  

*/
}
