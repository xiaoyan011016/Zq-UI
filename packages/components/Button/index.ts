/* 
    每一个组件都需要编写完进行注册导出
*/

import Button from "./Button.vue";
// 全局注册了@zq-ui/utils包，然后在改目录中引入了全局注册方法
import { withInstall } from "@zq-ui/utils";

export const ZqButton = withInstall(Button);

export * from "./type";
