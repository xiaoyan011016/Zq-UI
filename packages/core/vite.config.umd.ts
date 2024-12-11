import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from 'path'

/* 
    umd是通过浏览器标签script引入使用
*/

export default defineConfig({
    plugins:[vue()],
    build:{
        outDir:'dist/umd', //输出的打包目录结构
        lib:{
            entry:resolve(__dirname,'./index.ts'),
            name:'ZqUi',  //指定库的全局变量名
            fileName:'index',
            formats:['umd']
        },
        rollupOptions:{
            // umd引入体积大，包含了库主要程序，如icon等
            external:['vue'], //排除vue 需单独引入
            output:{
                exports:'named',
                globals:{
                    vue:'Vue', // vue的umd引入使用方式 Vue实例
                },
                assetFileNames(assetInfo){
                    if(assetInfo.name === 'style.css'){ //文件重命名
                        return 'index.css'
                    }
                    return assetInfo.name as string
                }
            }
        }
    }
})