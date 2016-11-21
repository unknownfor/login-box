/**
 * Created by mayoi on 2016/11/16.
 */
(function ($) {

    var defaluts = {
        username:12345678910,
        password:123,
        callBack : null
    };

    $.fn.extend({
        "login": function (options) {
            var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
            return this.each(function () {  //这里的this就是jquery对象，这里return是为了支持链式调用
                var $this = $(this);
                init();

                function init() {
                    judgeNum(),
                    clickClose(),
                    showBtn();
                };

                //判断手机号的合法
                function judgeNum() {
                    //文本框失去焦点后
                    $('input').blur(function () {
                        var $parent = $(this).parent();
                        $parent.find(".formTips").remove();
                        //
                        if ($(this).is('#username')) {
                            //值为空，输入不为0-9的数字，输入值不等于11
                            if (this.value == "" || ! /^[0-9]+$/.test(this.value) || this.value.length != 11) {
                                var errorMsg = '*请输入正确的手机号码.';
                                $parent.append('<span class="formTips onError">' + errorMsg + '</span>');
                            } else {
                                var okMsg = '输入正确.';
                                $parent.append('<span class="formTips onSuccess">' + okMsg + '</span>');
                            }
                        }
                    }).focus(function(){
                        $(this).triggerHandler("blur");
                    });
                };

                //点击关闭登录框
                function clickClose() {
                    $('#login-close').click(function () {
                        $('.login-box').addClass('hide');
                    });
                };

                //提交按钮
                function showBtn() {
                    //提交，最终验证。
                    $('.item-submit').click(function () {
                        $("body :input.required").trigger('blur');
                        var numError = $('body .onError').length;
                        if (numError) {
                            return false;
                        }
                        alert("登录成功");
                    });
                };

                })
            }
    });

})(jQuery);