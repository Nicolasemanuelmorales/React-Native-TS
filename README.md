- [Levantar el proyecto](#levantar-el-proyecto)
- [Creación del proyecto e instalación de dependencias](#creación-del-proyecto-e-instalación-de-dependencias)
  - [Node.js](#nodejs)
  - [Expo](#expo)
  - [Interprete para crear templates](#interprete-para-crear-templates)
  - [Store](#store)
  - [Navigation](#navigation)
  - [Paper (Coleccion de componentes)](#paper-coleccion-de-componentes)
  - [Icons](#icons)
  - [Redux](#redux)
  - [Axios](#axios)
- [Deploy con Expo Snack](#deploy-con-expo-snack)
- [Prettier](#prettier)

# Levantar el proyecto

1. [Node.js](https://nodejs.org/es/ "Node.js").
2. `npm install` Sobre el origen del proyecto.
3. `npm start`
   
# Creación del proyecto e instalación de dependencias

## Node.js
https://nodejs.org/es/
## Expo
https://docs.expo.dev/
```
npm install --global expo-cli
```
## Interprete para crear templates

En una terminal que no sea Git Bash y seleccionar la opción de Blank (typescript).

https://reactnative.dev/docs/typescript
```
expo init "nombreDelProyecto"
```
## Store

https://docs.expo.dev/versions/latest/sdk/securestore/
```
expo install expo-secure-store
```

## Navigation
https://reactnavigation.org/docs/getting-started
```
npm install @react-navigation/native
npm install @react-navigation/stack
npm install @react-navigation/drawer
expo install react-native-screens react-native-safe-area-context
expo install react-native-gesture-handler react-native-reanimated
```

## Paper (Coleccion de componentes)
https://callstack.github.io/react-native-paper/
```
npm install react-native-paper
```

## Icons
https://www.npmjs.com/package/react-native-vector-icons
```
npm install react-native-vector-icons
npm install @expo/vector-icons
```

## Redux
https://react-redux.js.org/introduction/getting-started
```
npm install redux
npm install react-redux
```


## Axios
https://axios-http.com/docs/intro
```
npm i axios
```


# Deploy con Expo Snack

1. Ingresar a https://snack.expo.dev .

   > Puedes estar logeado o no. Es recomendado hacerlo ya que sino cualquier persona con el link podria editar el proyecto.

2. En los 3 puntos de "Proyect", en el panel izquierdo, seleccionar "Import git repository".
3. Pegar el link base del proyecto.

   > En el caso de que indique errores tiene que solucionarlos manualmente, o modificar el proyecto para que no sucedan.

4. Presional Ctrl + s

Si quieres utilizar el emulador, en la parte superior derecha de la pantalla hay un icono "<>" que te brindara el codigo html para poder utilizarlo.

# Prettier

Se configura desde los complementos del Visual Studio Code.

1.  Se tiene que habilitar la opción **Format On Save** en `File -> Preferences -> Settings -> Text editor -> Formatting`.
2.  Presionar `CTRL + SHIFT + P` , escribir **settings.json** y agregar :

```
 "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
```

> Prettier: No es necesario para la creacion ni para la ejecucion, pero si para mantener una convención.
