
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/main/main","pages/login/login","pages/reg/reg","pages/pwd/pwd","pages/user/user","pages/vehicle/list/list","pages/vehicle/monitor/monitor","pages/vehicle/basic/basic","pages/fault/list/list"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F4F4F4","backgroundColor":"#FFF"},"tabBar":{"color":"#7a7e83","selectedColor":"#FFD302","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/main","text":"首页","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/vehicle/list/list","text":"车辆列表","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/fault/list/list","text":"故障异常","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/img/user.png","selectedIconPath":"static/img/userHL.png"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"feisi_app","compilerVersion":"2.6.16","entryPagePath":"pages/main/main","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/main/main","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/login/login","meta":{},"window":{"navigationStyle":"custom","backgroundColor":"#fff"}},{"path":"/pages/reg/reg","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/pwd/pwd","meta":{},"window":{"navigationBarTitleText":"找回密码"}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/vehicle/list/list","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/vehicle/monitor/monitor","meta":{},"window":{}},{"path":"/pages/vehicle/basic/basic","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/fault/list/list","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});