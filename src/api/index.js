import requests from "./request";
import mockrequests from "./mockrequest";

//三级联动接口 
///api/product/getBaseCategoryList  GET  无参数
//发请求：axios发请求返回结果是Promise对象
// export const reqCategoryList = () => requests.get('/product/getBaseCategoryList');
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });

//获取banner（Home首页轮播图接口）
export const reqGetBannerList = ()=> mockrequests.get('/banner');

//获取floor数据
export const reqGetFloorList=()=>mockrequests.get('/floor');