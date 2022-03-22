import Vue from "vue";
import Vuex from "vuex";
import PostStore from "./modules/postStore";

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        postStore: PostStore
    },
    state:{

    },
    mutations:{

    },
    actions:{

    }
});
