/**
 * Created by hisihi on 2016/11/16.
 */
(function ($) {
    $.fn.extend({

        "login": function (options) {
            var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数

            return this.each(function () {  //这里的this就是jquery对象，这里return是为了支持链式调用
                var $this = $(this);
                init;

                //方法集合
                function init() {
                    judgeLegal(),
                    showBtn();
                };

                //判断手机号的合法
                function judgeLegal() {
                    TEL:"^1\\d{10}$";
                };

                //点击关闭登录框
                $(document).ready(function () {
                    $('#login-close').click(function () {
                        $('.login-box').addClass('hide');
                    });
                };

                //hover展示效果(jquery选择器）
                function showBtn() {
                    $this.on('mouseover','.item-submit',function(e){
                        var $target=$(e.currentTarget);
                        $target.addClass('active')
                    });
                }

            });
        }
    });

    var defaluts = {
        name:XXX,
        password:123,
        callBack : null
    };
    })(jQuery);