//对于axios的二次封装
import axios from 'axios';
//引入进度条
import nProgress from 'nprogress';
//引入进度条样式
import 'nprogress/nprogress.css';
//start进度条开始，done进度条结束

const requests = axios.create({
    //配置对象
    //基础路径，发送请求的时候，路径当中会出现/api
    baseURL:'/api',
    //请求超时时间
    timeout:5000
})
//请求拦截器
requests.interceptors.request.use((config)=>{
    //config：配置对象，对象中有个非常重要的属性，headers请求头
    nProgress.start();
    return config;
});
//响应拦截器
requests.interceptors.response.use((res)=>{
    nProgress.done();
    return res.data;
},(error)=>{
    return Promise.reject(new Error('failed'));
});

export default requests;