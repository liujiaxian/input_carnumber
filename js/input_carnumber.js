/**
 * Created by Administrator on 2017/5/4 0004.
 */

 var index = 0;

        $(".InputCarNumber").click(function () {
             //屏蔽浏览器滚动条
            alertSelectCarNumber(_layouthtml);
            isshowcontent();

            var carnumber = $(".InputCarNumber").val();
            if (carnumber != null && carnumber != "") {
                var array = carnumber.replace('-', '');
                for (var i = 0; i < array.length; i++) {
                    $(".carproselect li:eq(" + i + ")").text(array[i]);
                }
                $("#txtselectclick").html('');
            }
        });

        function Car() {
            this.Items = {};
        }
        Car.prototype.add = function (id, iArray) {
            this.Items[id] = iArray;
        }
        Car.prototype.Exists = function (id) {
            if (typeof (this.Items[id]) == "undefined") return false;
            return true;
        }

        var car = new Car();

        car.add('0', ['粤', '云', '青', '琼', '鲁', '渝', '京', '津', '沪', '桂', '湘', '鄂', '皖', '闽', '甘', '贵', '冀', '豫', '吉', '苏', '赣', '辽', '宁', '晋', '陕', '川', '浙', '新', '黑', '蒙', '藏']);

        car.add('0_0', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y']);
        car.add('0_1', ['A', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S']);
        car.add('0_2', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
        car.add('0_3', ['A', 'B', 'C', 'D', 'E']);
        car.add('0_4', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'U', 'V', 'Y']);
        car.add('0_5', ['A', 'B', 'C', 'F', 'G', 'H']);
        car.add('0_6', ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'J', 'K']);
        car.add('0_7', ['A', 'B', 'C', 'E']);
        car.add('0_8', ['A', 'B', 'C', 'D']);
        car.add('0_9', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P']);
        car.add('0_10', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P']);
        car.add('0_11', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q']);
        car.add('0_12', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R']);
        car.add('0_13', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K']);
        car.add('0_14', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P']);
        car.add('0_15', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J']);
        car.add('0_16', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'R', 'T']);
        car.add('0_17', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'U']);
        car.add('0_18', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
        car.add('0_19', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N']);
        car.add('0_20', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L']);
        car.add('0_21', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'V']);
        car.add('0_22', ['A', 'B', 'C', 'D']);
        car.add('0_23', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M']);
        car.add('0_24', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'U']);
        car.add('0_25', ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'J', 'K', 'L', 'Q', 'R', 'S', 'T', 'U', 'V', 'W']);
        car.add('0_26', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L']);
        car.add('0_27', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R']);
        car.add('0_28', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P']);
        car.add('0_29', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L']);
        car.add('0_30', ['A', 'B', 'C', 'D', 'E', 'F', 'G']);

        var allarray =  ['1','2','3','4','5','6','7','8','9','0','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z'];

        var _layouthtml = '<ul class="carproselect carpro"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li class="carprodelete" onclick="selectcarnumberdelete()">删除</li><div class="clear_both"></div></ul><ul class="carpro" id="txtselectclick"></ul>';


        //判断车牌号第几个为空
        function isnull() {
            var i = 0;
            $(".carproselect li").not('.carprodelete').each(function () {
                var val = $(this).text();
                if (val != "" && val != null) {
                    i++;
                }
            });
            return i;
        }

        //选中事件
        function selectcarnumber(_obj,index) {  
            if(index!=-1){
                this.index = index;     
            }             
            var text = _obj.text();
            $(".carproselect li:eq(" + isnull() + ")").text(text);

            if (isnull() == "7") {
                $("#txtselectclick").html('');
                return;
            }
            isshowcontent();
        }

        //判断应该显示哪个内容
        function isshowcontent() {
            var number = parseInt(isnull());
            switch (number) {
                case 0:
                    selectPro();
                    break;
                case 1:
                    selectProNumber();
                    break;
                default:
                    selectNumberAll();
                    break;
            }
        }

        //选择省份
        function selectPro(){
            var prolist = car.Items["0"];
            var _prohtml ='';
            for (var i = 0; i < prolist.length; i++) {
                _prohtml+='<li onclick="selectcarnumber($(this),'+i+')">'+prolist[i]+'</li>';
            }
            $("#txtselectclick").html(_prohtml);
        }

        //选择对应的字母编号
        function selectProNumber(){
            var pronumberlist = car.Items["0_"+index];
            var _pronumberhtml ='';
            for (var i = 0; i < pronumberlist.length; i++) {
                _pronumberhtml+='<li onclick="selectcarnumber($(this),-1)">'+pronumberlist[i]+'</li>';
            }
            $("#txtselectclick").html(_pronumberhtml);
        }
        
        //选择数字和字母组合
        function selectNumberAll(){
            var _allhtml = '';
             for (var i = 0; i < allarray.length; i++) {
                _allhtml+='<li onclick="selectcarnumber($(this),-1)">'+allarray[i]+'</li>';
            }
            $("#txtselectclick").html(_allhtml);
        }

        //移除车牌号码
        function selectcarnumberdelete() {
            var currentindex = parseInt(isnull());
            if (currentindex > 0) {
                $(".carproselect li:eq(" + (currentindex - 1) + ")").text('');
                isshowcontent();
            }
        }
        //重置车牌号码
        function selectcarnumberreset() {
            $(".carproselect li").not(".carprodelete").each(function () {
                $(this).text('');
            });
            isshowcontent();
        }

        function alertSelectCarNumber(_html) {
            layer.open({
                title: '请输入车牌号',
                content: _html,
                area: ['525px', '350px'],
                scrollbar: false,
                btn: ['重置', '确定'],
                yes: function (index) {
                    selectcarnumberreset();
                },
                btn2: function (index) {
                    var val = "";
                    var i = 0;
                    $(".carproselect li").not(".carprodelete").each(function () {
                        i++;
                        val += $(this).text();
                        if (i == 2) {
                            val += "-";
                        }
                    });
                    //console.log(val);
                    if (!isVehicleNumber(val)) {
                        //正上方
                        layer.msg('车牌号码格式不正确!', {
                            offset: 't',
                            type: 1,
                            anim: 6
                        });

                        //layer.msg('车牌号码格式不正确!', {icon: 5});
                        return false;//开启该代码可禁止点击该按钮关闭
                    } else {
                        $(".InputCarNumber").val(val);
                    }
                }
            });
        }

        //验证车牌号
        function isVehicleNumber(vehicleNumber) {
            var result = false;
            if (vehicleNumber.length == 8) {
                var express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z][-]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
                result = express.test(vehicleNumber);
            }
            return result;
        }