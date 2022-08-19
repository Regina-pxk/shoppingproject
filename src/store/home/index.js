import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api";
//home模块对应的仓库
const state = {
    //home仓库存储的三级菜单工具
    categoryList: [],
    //轮播图的数据
    bannerList:[],
    //floor组件数据
    floorList:[]
};

const actions = {
    async categoryList(context) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            context.commit("CATEGORYLIST", result.data)
        }
    },
    //获取首页轮播图数据
    async getBannerList(context) {
        var result = await reqGetBannerList();
        if (result.code == 200) {
            context.commit("GETBANNERLIST", result.data)
        }
    },
    //获取首页轮播图数据
    async getFloorList(context) {
        var result = await reqGetFloorList();
        if (result.code == 200) {
            context.commit("GETFLOORLIST", result.data)
        }
    }
};

const mutations = {
    CATEGORYLIST(state, value) {
        state.categoryList = value;
    },
    GETBANNERLIST(state, value){
        state.bannerList = value;
    },
    GETFLOORLIST(state, value){
        state.floorList = value;
    }
};

const getters = {

};

export default {
    namespaced: true,//这里一定要加true
    state,
    actions,
    mutations,
    getters,
}
