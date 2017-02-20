## 项目结构说明
### 目录说明
- components：handlebars模板文件；
- data：测试数据；
- images：图片，包括jpg、png、gif和svg图标等；
- pages：HTML页面；
- scripts：自己编写的js文件；
- sea-modules：引用的第三方库文件，如seajs、jQuery等；
- styles：CSS样式文件；
- util：工具类文件，如通用方法、常量等。
- seajs.cofig.js：seajs配置文件，可以配置一些别名，方面引用；
- mine.js：类型文件，供server.js文件使用；
- server.js：简单的Nodejs服务器，用于启动服务，使用`node server.js`即可启动，然后在浏览器中访问`localhost:3000/pages/xxx.html`，就可以看到页面效果。

**说明：**所有一级文件夹下面，都可以新建二级文件夹，将同一模块的代码整合在一个文件夹里面。


