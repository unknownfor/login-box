/**
 * Created by hisihi on 2016/11/21.
 */

jQuery.validator.addMethod( "checkPost",function(value,element){

    var pattern =/^[0-9]{6}$/;

    if(value !=''){if(!pattern.exec(value)){return false;}};

    return true;

} ,  "请输入有效的邮政编码");

//添加转换小写功能
jQuery.validate.addMethod("toLowerCase", function(value, element) {
    value = $.trim(String(value));//去空
    if(value==""){element.value = ""; return this.optional(element)|| true;}
    if(value.toLowerCase()!=value) element.value = value.toLowerCase();
    return this.optional(element)|| true;
}, "");

//验证手机

jQuery.validate.addMethod( "checkMobile",function(value,element){

    var reg0 = /^13\d{5,9}$/;

    var reg1 = /^15\d{5,9}$/;

    var reg2 = /^189\d{4,8}$/;

    var reg3 = /^0\d{10,11}$/;

    var my = false;

    if (reg0.test(value))my=true;

    if (reg1.test(value))my=true;

    if (reg2.test(value))my=true;

    if (reg3.test(value))my=true;

    if(value!=''){if(!my){return false;}};

    return true;

} ,  " 请输入有效的手机号码");

//验证密码 6-18位由字符数字和特殊符号组成 排除空格..

jQuery.validate.addMethod("checkPassword",function(value, element) {
    var myreg = /^[^\s]{6,18}$/;
    if (value != '') {if (!myreg.test(value)) {return false;}};
    return true;}, "请输入有效密码!");

//验证邮箱

jQuery.validate.addMethod( "checkEmail",function(value,element){

    var myreg = /^[_a-zA-Z0-9\-]+(\.[_a-zA-Z0-9\-]*)*@[a-zA-Z0-9\-]+([\.][a-zA-Z0-9\-]+)+$/;

    if(value !=''){if(!myreg.test(value)){return false;}};

    return true;

} ,  " 请输入有效的E_mail");



//验证固定电话

jQuery.validate.addMethod( "checkTel",function(value,element){

    var pattern =/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;

    if(value!=''){if(!pattern.exec(value)){return false;}};

    return true;

} ,  "请输入有效的固定电话");





//验证名称是否重复

jQuery.validate.addMethod( "checkName",function(value,element){

    var returnMsg=true;

    jQuery.ajax({type:"get",url:"url",

        async:false,cache:false,data:{ toinName:value,method:"get"},dataType:"html",scriptCharset:"UTF-8",success:function(msg){

            if(msg=="1"){

                returnMsg=false;

            }

        }});

    return returnMsg;

} ,  "此名称已经被占用！请您更换其它名称");



$("#addForm").validate({

    errorPlacement:function (error, element){

        if(element.attr("type")=="checkbox"||element.attr("type")=="radio"){
            error.appendTo(element.parent());
        }else{
            error.appendTo(element.parent());
        }
    },

    rules: {
        username: {
            required: true,
            username:true,
            rangelength: [5,10]
        }
    },
    messages: {
        username: {
            required: "用户名不能为空",
            rangelength: "用户名必须在5-10个字符之间"
        }
    },

});