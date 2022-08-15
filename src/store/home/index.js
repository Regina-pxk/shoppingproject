import { reqCategoryList, reqGetBannerList } from "@/api";
//home模块对应的仓库
const state = {
    //home仓库存储的三级菜单工具
    categoryList: [],
    //轮播图的数据
    bannerList:[]

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
    }
};

const mutations = {
    CATEGORYLIST(state, value) {
        state.categoryList = value;
    },
    GETBANNERLIST(state, value){
        state.bannerList = value;
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
