import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'joy-con',
  styleUrl: 'joy-con.css',
  shadow: true
})
export class MyComponent {

  @Prop() side: 'L'|'R';
  @Prop() leftTriggerButton: string;
  @Prop() rightTriggerButton: string;
}
