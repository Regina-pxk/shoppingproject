//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router'

//编程式导航多次点击报错处理

//先浅拷贝VueRouter原型对象上的push方法
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;

//重写push|replace
//第一个参数：告诉原来的push方法，往哪里跳转（传递哪些参数）
//第二个参数：成功的回调
//第三个参数：失败的回调


//第一种写法
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }
//第二种写法
//call||apply的区别
//相同点：都可以调用函数一次，都可以篡改函数的上下文一次
//不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组


//location:路由跳转相关的信息
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originalPush.call(this, location, resolve, reject);
    } else {
        originalPush.call(this, location, () => { }, () => { });
    }
}


VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originalReplace.call(this, location, resolve, reject);
    } else {
        originalReplace.call(this, location, () => { }, () => { });
    }
}

//使用插件
Vue.use(VueRouter);

//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

export default new VueRouter({
    routes: [
        {
            name: 'Home',
            path: '/home',
            component: Home,
            meta: { showFooter: true }
        },
        {
            name: 'Login',
            path: '/login',
            component: Login,
            meta: { showFooter: false }
        },
        {
            name: 'Register',
            path: '/register',
            component: Register,
            meta: { showFooter: false }
        },
        {
            name: 'Search',
            path: '/search/:keyWord', //     /search/:keyWord
            component: Search,
            meta: { showFooter: true }
        },
        {
            path: '*',//或者/
            redirect: '/home',
            meta: { showFooter: true }
        }

    ]
})