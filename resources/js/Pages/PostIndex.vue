<template>
    <div class="card">
        <div class="card-header">
            <h2>All Post</h2>
        </div>
        <div class="card-body">
           <post-form></post-form>
            <post
                v-for="(post, index) in allPosts"
                :post="post"
                :key="index">
            </post>
        </div>
    </div>
</template>

<script>
import Post from "./Post.vue";
import PostForm from "./PostForm.vue";
import { createNamespacedHelpers } from "vuex";

const { mapMutations, mapGetters } = createNamespacedHelpers('postStore')
export default {
    components:{
        Post,
        PostForm
    },
    props:{
        posts:{
            type:[Array, Object],
            require: true,
        }
    },
    computed:{
        ...mapGetters([
            'allPosts'
        ]),
    },
    methods:{
        ...mapMutations([
            'SET_POSTS',
        ]),
    },
    created(){
        this.SET_POSTS(this.posts.data)
    }
}
</script>
