/* 
    只负责对componens目录中的实际组件进行处理
*/

import { ZqButton, ZqIcon,ZqButtonGroup } from "@zq-ui/components";
import type { Plugin } from "vue";

export default [ZqButton, ZqIcon,ZqButtonGroup] as Plugin[];
