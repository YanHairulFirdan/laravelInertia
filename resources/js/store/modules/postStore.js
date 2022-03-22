import axios from "axios"

export default{
    namespaced: true,
    state:{
        posts:[],
        currentPost:{},
    },
    mutations:{
        SET_POSTS(state, posts){
            state.posts = posts
        },
        ADD_POST(state, postPayload){
            state.posts.push(postPayload)
        },
        UPDATE_POST(state, {postIndex, postPayload}){
            state.posts[postIndex] = postPayload;
        },
        DELETE_POST(state, postIndex){
            state.posts.splice(postIndex,1);
        },
        SET_CURRENT_POST(state, post){
            state.currentPost = post
        },
    },
    actions:{
        storePost({commit}, postPayload){
            axios.post('', postPayload)
                .then(response => response.data)
                .then(respose => {
                    commit('ADD_POST', respose.data)
                })
        },
        updatePost({commit, getters}, postPayload){
            let postID = postPayload.id;

            axios.put('/posts/'+postID, postPayload)
                .then(response => response.data)
                .then(response => {
                    let postIndex = getters.postIndex(postID);

                    commit('UPDATE_POST', {postIndex, postPayload: response.data})
                })
        },
        deletePost: ({ commit, getters }, postId) => {
            let postIndex = getters.postIndex(postId)

            axios.delete('/posts/' + postId)
                .then(response => response.data)
                .then(response => {
                    commit('DELETE_POST', postIndex)
                })
        }
    },
    getters:{
        allPosts :(state) => state.posts,
        postIndex : state => postID => {
            let postIndex = state.posts.findIndex(post => post.id == postID)

            return postIndex != -1 ? postIndex : 0;
        }
    },
}
