/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface JoyCon {
      'left': string;
      'right': string;
      'side': "L" | "R";
    }
  }

  interface HTMLJoyConElement extends StencilComponents.JoyCon, HTMLStencilElement {}

  var HTMLJoyConElement: {
    prototype: HTMLJoyConElement;
    new (): HTMLJoyConElement;
  };
  interface HTMLElementTagNameMap {
    'joy-con': HTMLJoyConElement;
  }
  interface ElementTagNameMap {
    'joy-con': HTMLJoyConElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'joy-con': JSXElements.JoyConAttributes;
    }
  }
  namespace JSXElements {
    export interface JoyConAttributes extends HTMLAttributes {
      'left'?: string;
      'right'?: string;
      'side'?: "L" | "R";
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;