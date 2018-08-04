import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "joy-con",
  outputTargets: [
    {
      type: "dist"
    },
    { type: "www" }
  ]
};
