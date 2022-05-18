import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

export default (appInfo: MidwayAppInfo) => {
  return {
    keys: appInfo.name + '_1648103442918_9679',
    koa: { port: 7011 },
  } as MidwayConfig;
};
