/*此文件的作用：覆盖webpack的部分配置*/
const { override, fixBabelImports,addLessLoader } = require('customize-cra');

/*process.env.GENERATE_SOURCEMAP = "false";*/  //去掉打包后静态文件夹中的css和js的map文件

module.exports = override(
    fixBabelImports('import', {//按需加载antd
        libraryName: 'antd',
        libraryDirectory: 'es',
        /*style: 'css',*/
        style:true
    }),
    addLessLoader({ //可自定义ant-design主题样式
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#1890ff',                       // 全局主色
            '@link-color': '#1890ff',                            // 链接色
            '@success-color':'#52c41a',                        // 成功色
            '@font-size-base': '14px',                          // 主字号
            '@heading-color': 'rgba(0, 0, 0, .85)',             // 标题色
            '@text-color': 'rgba(0, 0, 0, .65)',                // 主文本色
            '@text-color-secondary': 'rgba(0, 0, 0, .45)',      // 次文本色
            '@disabled-color' : 'rgba(0, 0, 0, .25)',           // 失效色
            '@border-radius-base': '4px',                       // 组件/浮层圆角
            '@border-color-base': '#d9d9d9',                   // 边框色
            '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)',  // 浮层阴影
        },
        /*localIdentName: '[local]--[hash:base64:5]'*/ // 自定义 CSS Modules 的 localIdentName
    })

);