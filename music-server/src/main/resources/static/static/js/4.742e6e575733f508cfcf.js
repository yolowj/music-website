webpackJsonp([4],{"4KnA":function(e,r){},"8DDt":function(e,r){},MIHL:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t("msXN"),l=t("sK3K"),s=t("bG3r"),i=t("gyMJ"),o={name:"SignUp-page",mixins:[a.a],components:{loginLogo:l.a},data:function(){return{registerForm:{username:"",password:"",sex:"",phoneNum:"",email:"",birth:"",introduction:"",location:""},rules:s.b,cities:s.a}},methods:{SignUp:function(){var e=this,r=this.registerForm.birth,t=r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate(),a=new URLSearchParams;a.append("username",this.registerForm.username),a.append("password",this.registerForm.password),a.append("sex",this.registerForm.sex),a.append("phone_num",this.registerForm.phoneNum),a.append("email",this.registerForm.email),a.append("birth",t),a.append("introduction",this.registerForm.introduction),a.append("location",this.registerForm.location),a.append("avator","/img/user.jpg"),i.a.SignUp(a).then(function(r){console.log(r),1===r.code?(e.notify("注册成功","success"),setTimeout(function(){e.$router.push({path:"/"})},2e3)):e.notify("注册失败","error")}).catch(function(e){console.log(e)})},goback:function(e){this.$router.go(e)}}},n={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"signUp-page"},[t("loginLogo"),e._v(" "),t("div",{staticClass:"signUp"},[e._m(0),e._v(" "),t("el-form",{ref:"registerForm",staticClass:"demo-ruleForm",attrs:{model:e.registerForm,"status-icon":"",rules:e.rules,"label-width":"70px"}},[t("el-form-item",{attrs:{prop:"username",label:"用户名"}},[t("el-input",{attrs:{placeholder:"用户名"},model:{value:e.registerForm.username,callback:function(r){e.$set(e.registerForm,"username",r)},expression:"registerForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password",label:"密码"}},[t("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.registerForm.password,callback:function(r){e.$set(e.registerForm,"password",r)},expression:"registerForm.password"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"sex",label:"性别"}},[t("el-radio-group",{model:{value:e.registerForm.sex,callback:function(r){e.$set(e.registerForm,"sex",r)},expression:"registerForm.sex"}},[t("el-radio",{attrs:{label:0}},[e._v("女")]),e._v(" "),t("el-radio",{attrs:{label:1}},[e._v("男")])],1)],1),e._v(" "),t("el-form-item",{attrs:{prop:"phoneNum",label:"手机"}},[t("el-input",{attrs:{placeholder:"手机"},model:{value:e.registerForm.phoneNum,callback:function(r){e.$set(e.registerForm,"phoneNum",r)},expression:"registerForm.phoneNum"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"email",label:"邮箱"}},[t("el-input",{attrs:{placeholder:"邮箱"},model:{value:e.registerForm.email,callback:function(r){e.$set(e.registerForm,"email",r)},expression:"registerForm.email"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"birth",label:"生日"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.registerForm.birth,callback:function(r){e.$set(e.registerForm,"birth",r)},expression:"registerForm.birth"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"introduction",label:"签名"}},[t("el-input",{attrs:{type:"textarea",placeholder:"签名"},model:{value:e.registerForm.introduction,callback:function(r){e.$set(e.registerForm,"introduction",r)},expression:"registerForm.introduction"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"location",label:"地区"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"地区"},model:{value:e.registerForm.location,callback:function(r){e.$set(e.registerForm,"location",r)},expression:"registerForm.location"}},e._l(e.cities,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),t("div",{staticClass:"login-btn"},[t("el-button",{on:{click:function(r){return e.goback(-1)}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.SignUp}},[e._v("确定")])],1)],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"signUp-head"},[r("span",[this._v("用户注册")])])}]};var u=t("VU/8")(o,n,!1,function(e){t("8DDt")},"data-v-1cfaea2f",null);r.default=u.exports},bG3r:function(e,r,t){"use strict";t.d(r,"b",function(){return a}),t.d(r,"a",function(){return l});var a={username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],phoneNum:[{essage:"请选择日期",trigger:"blur"}],email:[{message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],birth:[{required:!0,type:"date",message:"请选择日期",trigger:"change"}],introduction:[{message:"请输入介绍",trigger:"blur"}],location:[{message:"请输入地区",trigger:"change"}]},l=[{value:"北京",label:"北京"},{value:"天津",label:"天津"},{value:"河北",label:"河北"},{value:"山西",label:"山西"},{value:"内蒙古",label:"内蒙古"},{value:"辽宁",label:"辽宁"},{value:"吉林",label:"吉林"},{value:"黑龙江",label:"黑龙江"},{value:"上海",label:"上海"},{value:"江苏",label:"江苏"},{value:"浙江",label:"浙江"},{value:"安徽",label:"安徽"},{value:"福建",label:"福建"},{value:"江西",label:"江西"},{value:"山东",label:"山东"},{value:"河南",label:"河南"},{value:"湖北",label:"湖北"},{value:"湖南",label:"湖南"},{value:"广东",label:"广东"},{value:"广西",label:"广西"},{value:"海南",label:"海南"},{value:"重庆",label:"重庆"},{value:"四川",label:"四川"},{value:"贵州",label:"贵州"},{value:"云南",label:"云南"},{value:"西藏",label:"西藏"},{value:"陕西",label:"陕西"},{value:"甘肃",label:"甘肃"},{value:"青海",label:"青海"},{value:"宁夏",label:"宁夏"},{value:"新疆",label:"新疆"},{value:"香港",label:"香港"},{value:"澳门",label:"澳门"},{value:"台湾",label:"台湾"}]},sK3K:function(e,r,t){"use strict";var a=t("WU9+"),l={name:"login-logo",data:function(){return{ERJI:a.a.ERJI}}},s={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"login-logo"},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":this.ERJI}})])])},staticRenderFns:[]};var i=t("VU/8")(l,s,!1,function(e){t("4KnA")},"data-v-f6208d10",null);r.a=i.exports}});
//# sourceMappingURL=4.742e6e575733f508cfcf.js.map