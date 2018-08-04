import { Component, Prop, Watch, State } from "@stencil/core";
import Unswitch from "unswitch";
import { JoyConIcon } from "./JoyConIcon";

@Component({
  tag: "joy-con",
  styleUrl: "joy-con.css",
  shadow: true
})
export class MyComponent {
  @State() private initialized = false;
  @Prop() side: "L" | "R";
  @Prop() left: string;
  @Prop() right: string;
  controller: any;
  @Watch("left")
  onLeftTrigger() {
    this.checkAndDoInit();
  }
  @Watch("right")
  onRightTrigger() {
    this.checkAndDoInit();
  }
  componentDidLoad() {
    this.checkAndDoInit();
  }
  private checkAndDoInit() {
    if (!this.initialized) {
      if (this.left && this.right && this.side) {
        this.init();
      }
    }
  }
  private init() {
    this.initialized = true;
    const unswitchSettings = {
      side: this.side.toUpperCase()
    };
    unswitchSettings[this.left] = pressed => {
      if (pressed) {
        this.triggerEvent(37);
      }
    };
    unswitchSettings[this.right] = pressed => {
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
    return <JoyConIcon active={this.initialized} />;
  }
  private triggerEvent(keyCode: number) {
    const keyboardOptions: any = { bubbles: true, cancelable: true, keyCode };
    document.dispatchEvent(new KeyboardEvent("keydown", keyboardOptions));
  }
}
