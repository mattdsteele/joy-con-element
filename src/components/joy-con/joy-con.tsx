import {
  Component,
  Prop,
  Watch,
  State,
  Event,
  EventEmitter
} from "@stencil/core";
import Unswitch, { UnswitchOptions } from "unswitch";
import { JoyConIcon } from "./JoyConIcon";

@Component({
  tag: "joy-con",
  styleUrl: "joy-con.css",
  shadow: true
})
export class JoyCon {
  @State() private initialized = false;
  @Prop() side: "L" | "R";
  @Prop() left: string;
  @Prop() right: string;
  @Event() button: EventEmitter;
  @Event() axes: EventEmitter;
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
      if (this.side) {
        this.init();
      }
    }
  }
  private init() {
    this.initialized = true;
    const unswitchSettings: UnswitchOptions = {
      buttons: this.onButtonPress,
      axes: this.onAxes,
      side: this.side.toUpperCase()
    };
    this.controller = new Unswitch(unswitchSettings);
    this.update();
  }
  onAxes = (value: number) => {
    this.axes.emit({ value });
  };
  onButtonPress = (button: string, pressed: boolean) => {
    if (this.left && button === this.left) {
      this.triggerEvent(37);
    }
    if (this.right && button === this.right) {
      this.triggerEvent(39);
    }
    this.button.emit({ button, pressed });
  };
  private update() {
    this.controller.update();
    requestAnimationFrame(() => this.update());
  }
  private triggerEvent(keyCode: number) {
    const keyboardOptions: any = { bubbles: true, cancelable: true, keyCode };
    document.dispatchEvent(new KeyboardEvent("keydown", keyboardOptions));
  }
  render() {
    return <JoyConIcon active={this.initialized} />;
  }
}
