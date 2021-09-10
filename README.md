## Levantar el proyecto

1. [Node.js](https://nodejs.org/es/ "Node.js").
2. `npm install` Sobre el origen del proyecto.
3. `npm start`

## Creación del proyecto

### Expo

`npm install --global expo-cli`

### Interprete para crear templates

`expo init "nombreDelProyecto"` y seleccionar la opción de Blank (typescript)

### Navigation

`npm install @react-navigation/native`
`expo install react-native-screens react-native-safe-area-context`
`npm install @react-navigation/stack`
`expo install react-native-gesture-handler react-native-reanimated`
`npm install @react-navigation/drawer`

### Paper (Coleccion de componentes)

`npm install react-native-paper`

### Icons

`npm install react-native-vector-icons`
`npm install @expo/vector-icons`

### Redux

`npm install redux`
`npm install react-redux`

Store

`expo install expo-secure-store`

### Axios

`npm i axios`

## Prettier

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
