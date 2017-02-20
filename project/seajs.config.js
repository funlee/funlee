/**
 * @Author:      baizn
 * @DateTime:    2017-01-17 09:24:27
 * @Description: seajs配置文件
 * @Last Modified By:   baizn
 * @Last Modified Time:    2017-01-17 09:24:27
 */

seajs.config({
    paths: {
        //modules: 'sea-modules',
        app: '../scripts'
    },
    alias: {
        pageBg: 'app/pageBg.js',
        //第三方库文件
        jquery: 'jquery.min.js'
        
    }
})