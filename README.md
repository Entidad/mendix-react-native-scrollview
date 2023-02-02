## Scrollview
Custom React-Native ScrollView. This widget serves as a base implementing custom ScrollView features.

## Features

* Configurable autoscroll

## Usage
Download one of the [releases](https://github.com/Entidad/mendix-react-native-scrollview) or build from source as follows

```
git clone https://github.com/Entidad/mendix-react-native-scrollview.git
cd ./mendix-react-native-scrollview
npm install
npm run build
```

Deploy `entidad.Scrollview.mpk` to `$PROJ/widgets`, execute `Synchronize App Directory` in Mendix IDE (`alt-f4` or invoke `Menu/App/Synchronize App Directory`. Place the widget in some context passing component like a `DataView`. At a minimum configure the widget value attribute.

## Demo project
None at this time

## Issues, suggestions and feature requests
[GitHub](https://github.com/Entidad/mendix-ace-editor/issues)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
