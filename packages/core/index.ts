import { makeInstaller } from "@zq-ui/utils";
import components from "./components"; //导入所有注册的组件

//使用者以 app.use()形式使用,或者插件式使用
const installer = makeInstaller(components); 

export * from '@zq-ui/components';
export default installer;