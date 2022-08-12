import { reqCategoryList } from "@/api";
//home模块对应的仓库
const state = {
    categoryList:[],
};

const actions = {
    async categoryList(context) {
        let result = await reqCategoryList();
        if(result.code == 200){
            context.commit("CATEGORYLIST",result.data)
        }
    }
};

const mutations = {
    CATEGORYLIST(state,value){
        state.categoryList = value;
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
