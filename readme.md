![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# `<joy-con>`

A Custom Element that maps a Nintendo Switch Joy-Con controller to keyboard events. Add it to web-based slide decks for an easy remote.

Based on @vaneenige's fantastic [unswitch](https://github.com/vaneenige/unswitch) library

## Demo

Check out the demo on [jsbin](http://jsbin.com/qapoven/edit?html,js,output)!

You'll want to have a Joy-Con paired to your PC already.

## Install

As a script tag: `<script src="https://unpkg.com/joy-con-element/dist/joy-con.js"></script>`

More installation options (Webpack, etc) described here: https://stenciljs.com/docs/framework-integration/

## Usage

`<joy-con side="r" left="y" right="a"></joy-con>`

The component will not activate until `side` has been defined.

Not Ready:

![screen shot 2018-08-06 at 19 19 03](https://user-images.githubusercontent.com/389077/43747267-58a543be-99ae-11e8-8e93-77c6b0b9def2.png)

Ready:

![screen shot 2018-08-06 at 19 19 26](https://user-images.githubusercontent.com/389077/43747270-5ad05a34-99ae-11e8-92b4-693b7f659b53.png)

## Props

All props are also accessible as attributes.

#### `side`: `'l' | 'r'`

Which type of Joy-Con

#### `left`: `JoyConButton`

Which Joy-Con button triggers a Left keyboard event

#### `right`: `JoyConButton`

Which Joy-Con button triggers a Right keyboard event

The full set of `JoyConButton` options is described in [unswitch](https://github.com/vaneenige/unswitch#usage)

## Events

#### `button`

Emitted when a button is pressed (or released). Contains metadata in the `detail` section of the CustomEvent:

```typescript
interface ButtonEventDetail {
  button: string; // which Joy-Con button was pressed
  pressed: boolean; // true if the button was pressed, false if the button was released
}
```
