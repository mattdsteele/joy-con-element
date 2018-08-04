import { Component, Prop, Watch, State } from "@stencil/core";
import Unswitch from "unswitch";

@Component({
  tag: "joy-con",
  styleUrl: "joy-con.css",
  shadow: true
})
export class MyComponent {
  @State() private initialized = false;
  @Prop() side: "L" | "R";
  @Prop() leftTriggerButton: string;
  @Prop() rightTriggerButton: string;
  controller: any;
  @Watch("leftTriggerButton")
  onLeftTrigger() {
    this.checkAndDoInit();
  }
  onRightTrigger() {
    this.checkAndDoInit();
  }
  componentDidLoad() {
    this.checkAndDoInit();
  }
  private checkAndDoInit() {
    if (!this.initialized) {
      if (this.leftTriggerButton && this.rightTriggerButton && this.side) {
        this.init();
      }
    }
  }
  private init() {
    this.initialized = true;
    const unswitchSettings = {
      side: this.side.toUpperCase()
    };
    unswitchSettings[this.leftTriggerButton] = pressed => {
      if (pressed) {
        this.triggerEvent(37);
      }
    };
    unswitchSettings[this.rightTriggerButton] = pressed => {
      if (pressed) {
        this.triggerEvent(39);
      }
    };
    this.controller = new Unswitch(unswitchSettings);
    this.update();
  }
  private update() {
    this.controller.update();
    requestAnimationFrame(() => this.update());
  }
  render() {
    return <span>Joy Con!</span>;
  }
  private triggerEvent(keyCode: number) {
    const keyboardOptions: any = { bubbles: true, cancelable: true, keyCode };
    document.dispatchEvent(new KeyboardEvent("keydown", keyboardOptions));
  }
}
