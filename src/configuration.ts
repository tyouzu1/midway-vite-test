import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { join } from 'path';
import * as koa from '@midwayjs/koa';
import { ViteMiddleware } from './middleware/vite.middleware';

@Configuration({
  imports: [koa],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app;
  async onReady() {
    this.app.useMiddleware(ViteMiddleware);
  }
}
