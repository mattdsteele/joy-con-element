declare module "unswitch" {
  type ButtonCallback = (pressed: boolean) => void;
  type AxesCallback = (value: number) => void;
  type ButtonsCallback = (
    button: string,
    pressed: boolean,
    side: string
  ) => void;
  export interface UnswitchOptions {
    side: string;
    buttons?: ButtonsCallback;
    b?: ButtonCallback;
    a?: ButtonCallback;
    y?: ButtonCallback;
    x?: ButtonCallback;
    sl?: ButtonCallback;
    sr?: ButtonCallback;
    minus?: ButtonCallback;
    plus?: ButtonCallback;
    lstick?: ButtonCallback;
    rstick?: ButtonCallback;
    home?: ButtonCallback;
    screenshot?: ButtonCallback;
    bumper?: ButtonCallback;
    trigger?: ButtonCallback;
    axes?: AxesCallback;
  }
  export function Unswitch(options: UnswitchOptions): void;
  export default Unswitch;
}
