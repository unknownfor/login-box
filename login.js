/**
 * Created by hisihi on 2016/11/16.
 */
(function ($) {
    $.fn.extend({

        "login": function (options) {
            var opts = $.extend({}, defaluts, options); //ʹ��jQuery.extend ���ǲ��Ĭ�ϲ���

            return this.each(function () {  //�����this����jquery��������return��Ϊ��֧����ʽ����
                var $this = $(this);
                init;

                //��������
                function init() {
                    judgeLegal(),
                    showBtn();
                };

                //�ж��ֻ��ŵĺϷ�
                function judgeLegal() {
                    TEL:"^1\\d{10}$";
                };

                //����رյ�¼��
                $(document).ready(function () {
                    $('#login-close').click(function () {
                        $('.login-box').addClass('hide');
                    });
                };

                //hoverչʾЧ��(jqueryѡ������
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