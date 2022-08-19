//search模块对应的仓库
import { reqGetSearchInfo } from "@/api";
const state = {
    searchList: {}
};

const actions = {
    //获取search模块数据
    async getSearchList(context, params = {}) {
        let result = await reqGetSearchInfo(params);//不传空对象无法调用接口
        if (result.code == 200) {
            context.commit("GETSEARCHLIST", result.data);
        }
    }
};

const mutations = {
    GETSEARCHLIST(state, value) {
        state.searchList = value;
    }
};
//计算属性
//主要作用：简化仓库中的数据
const getters = {
    //当前形参state是当前仓库中的state，并非大仓库中的state
    goodsList(state) {
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList || [];
    },
    attrsList(state) {
        return state.searchList.attrsList || [];
    }
};

export default {
    namespaced: true,//这里一定要加true
    state,
    actions,
    mutations,
    getters,
}
