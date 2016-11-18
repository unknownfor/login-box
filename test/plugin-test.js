/**
 * Created by hisihi on 2016/11/18.
 */
function Field(params){
    this.field_id=params.fid;     //要验证的字段的ID
    this.validators=params.val;   //验证器对象数组
    this.on_suc=params.suc;       //当验证成功的时候执行的事件
    this.on_error=params.err;     //当验证失败的时候执行的事件
    this.checked=false;           //是否通过验证
}

Field.prototype.validate=function(){
    //循环每一个验证器
    for(item in this.validators){
        //给验证器附加验证成功和验证失败的回调事件
        this.set_callback(this.validators[item]);
        //执行验证器上的Validate方法，验证是否符合规则
        if(!this.validators[item].validate(this.data())){
            break; //一旦任意一个验证器失败就停止
        }
    }
}


