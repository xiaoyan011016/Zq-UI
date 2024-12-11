import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from 'path'
import dts from 'vite-plugin-dts'; //类型引入提示插件

/* 
    umd是通过浏览器标签script引入使用
*/

const COMMON = [
    "Button",
    "Icon"
] as const

export default defineConfig({
    // @ts-ignore
    plugins:[vue(),dts({
        tsconfigPath:'../../tsconfig.build.json', //根据其中的includes配置进行打包处理
        outDir:'dist/types'
    })],
    build:{
        outDir:'dist/es', //输出的打包目录结构
        lib:{
            entry:resolve(__dirname,'./index.ts'),
            name:'ZqUi',  //指定库的全局变量名
            fileName:'index',
            formats:['es']
        },
        rollupOptions:{
            // es引入体积小需要用户单独引入如下库
            external:[
                'vue',
                '@fortawesome/fontawesome-svg-core',
                '@fortawesome/free-solid-svg-icons',
                '@fortawesome/vue-fontawesome',
                '@popperjs/core',
                'async-validator'
            ], //排除vue
            output:{
                assetFileNames(assetInfo){
                    if(assetInfo.name === 'style.css'){ //文件重命名
                        return 'index.css'
                    }
                    return assetInfo.name as string
                },
                manualChunks(id) {
                    // 分包处理第三方包，hook，util，和自己的组件
                    if(id.includes('node_modules')) {
                        return 'vendor'
                    }
                    if(id.includes('/packages/hooks')){
                        return 'hooks'
                    }
                    if(id.includes('/packages/utils')){
                        return 'utils'
                    }
                    for(const item of COMMON){
                        if(id.includes(`/packages/components/${item}`)){
                            return item
                        }
                    }
                }
            }
        }
    }
})