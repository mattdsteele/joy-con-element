import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'joy-con-element',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'joy-con-element',
      proxiesFile: './react-components.ts'
    }),
    angularOutputTarget({
      componentCorePackage: 'joy-con-element',
      directivesProxyFile:
        '../joy-con-element-angular/src/directives/proxies.ts'
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
