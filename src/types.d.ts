declare module "unswitch" {
  type ButtonCallback = (pressed: boolean) => void;
  interface UnswitchOptions {
    side: string;
    b?: ButtonCallback;
    a?: ButtonCallback;
    y?: ButtonCallback;
    x?: ButtonCallback;
    l?: ButtonCallback;
    r?: ButtonCallback;
    minus?: ButtonCallback;
    plus?: ButtonCallback;
  }
  function Unswitch(options: UnswitchOptions): void;
  export default Unswitch;
}
