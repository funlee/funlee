/**
 * @Author:      funlee
 * @DateTime:    2017-02-20
 * @Description: index.html首页入口
 */
define(function(require) {
    var jQuery = require('jquery');
    require('pageBg');
    var Index = {
        init: function() {
            $('.first-page').css({'height': $(window).height()});
        }
    }
    return Index;
})